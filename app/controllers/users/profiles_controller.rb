module Users
  class ProfilesController < ApplicationController
    def edit
      @user = User.find(params[:id])
    end

    def update
      @user = User.find(params[:id])

      if @user.update_attributes(user_params)
        redirect_to edit_profile_url(@user)
      else
        render :edit
      end
    end

    private

    def user_params
      params.require(:user).permit(
        :full_name, :email, :avatar
      )
    end
  end
end
