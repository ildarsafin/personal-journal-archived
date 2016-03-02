Rails.application.routes.draw do
  resources :goals, only: [:create, :destroy] do
    post :done, action: :done
  end

  resources :daily_achievements, only: [:create, :index]

  scope module: :users do
    resources :profiles, only: [:edit, :update]
  end

  devise_for :users, controllers: {
    sessions:           "users/sessions",
    registrations:        "users/registrations",
    passwords: "users/passwords"
  }

  root to: "daily_achievements#index"
end
