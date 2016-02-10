Rails.application.routes.draw do
  resources :goals, only: :create
  resources :daily_achievements, only: [:create, :index]

  root to: "daily_achievements#index"
end
