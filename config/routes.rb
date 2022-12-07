Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: 'users#index'

  resources :users
  resources :recipes
  resources :reviews 


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/user", to: "users#show"


end
