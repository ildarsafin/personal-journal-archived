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

    def set_user_locale
      locale = params[:locale]

      current_user.locale = locale
      current_user.save
      redirect_to :back
    end

    def set_background
      background = current_user.backgrounds.create(background_params)

      current_user.backgrounds.active.each do |active_background|
        active_background.update_attributes(active: false) unless active_background == background
      end

      redirect_to edit_profile_url(current_user)
    end


    private

    def user_params
      params.require(:user).permit(
        :full_name, :email, :avatar
      )
    end

    def background_params
      params.require(:background).permit(
        :background
      )
    end
  end
end
