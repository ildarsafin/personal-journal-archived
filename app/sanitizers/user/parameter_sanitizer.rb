class User
  class ParameterSanitizer < Devise::ParameterSanitizer
    USER_PARAMS = %i(
      full_name
      email
      password
      password_confirmation
    )

    def sign_up
      default_params.permit(USER_PARAMS)
    end

    def sign_in
      default_params.permit(USER_PARAMS)
    end
  end
end
