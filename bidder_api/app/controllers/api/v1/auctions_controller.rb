class Api::V1::AuctionsController < ApplicationController
    
    before_action :authenticate_user!, except: [:index, :show]
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

    def create
        auction = Auction.new(auction_params)
        # auction.user = User.first #hard coded for now
        auction.user = current_user

        if auction.save
            render json: {id: auction.id}
        else
            render(
                json: {errors: auction.errors.messages},
                status: 422
            )
        end
    end

    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions)
    end

    def show
        auction = Auction.find(params[:id])
        render(json: auction)
    end

    private

    def auction_params
        params.require(:auction).permit(:title, :description, :end_time, :price)
    end

    protected

    def record_not_found(error)
        status 404,
        json{
            errors [
                {
                    type: error.class.to_s,
                    message: error.message
                }
            ]
        }
    end
    
end
