class ApplicationController < ActionController::Base
  include Authentication

  before_action :authenticate_user!
  before_action :set_locale

  protect_from_forgery with: :exception

  private

  def set_locale
    I18n.locale = current_user.locale if current_user
    I18n.locale ||= I18n.default_locale
  end
end
