class Api::V1::BidsController < ApplicationController

    def create
        bid = Bid.new(bid_params)
    end

    private

    def bid_params
        params.require(:bid).permit(:bid_value)
    end

end
