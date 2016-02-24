module Users
  class SessionsController < Devise::SessionsController
    layout "on_board"
  end
end
