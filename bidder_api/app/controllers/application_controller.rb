class ApplicationController < ActionController::Base
    include ActionController::Helpers


    def current_user
        @current_user ||= User.find_by_id session[:user_id]
    end

    helper_method :current_user
    

    def user_signed_in?
        current_user.present?
    end

    helper_method :user_signed_in?

    # rescue_from StandardError

    # def not_found
    #     render(
    #         json: {
    #             errors: [
    #                 {
    #                     type: "Not found"
    #                 }
    #             ]
    #         },
    #         status: :not_found 
    #     )
    # end

    private

    def authenticate_user!
        unless current_user.present?
            render(json:{status:401})
        end
    end

end
