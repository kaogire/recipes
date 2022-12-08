class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(session[:user_id])
        render json: user
    end

    def create
        user = User.create!(user_params)
        if user.save
        # UserNotifierMailer.send_signup_email(@user).deliver
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render :action => 'new'

    end

    def update
        user = User.find_by(params[:id])
        user.update!(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {message: "User deleted"}, status: :ok
    end

    private

    def user_params
        params.require(:user).permit(:firstname, :lastname, :username, :email, :password, :password_confirmation)
    end

    def record_invalid
        render json: {error: "Invalid user"}, status: :unprocessable_entity
    end

end
end
