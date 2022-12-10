Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root to: 'users#index'

  resources :recipes
  resources :users
  resources :comments
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/user', to: 'users#show'
  get '/me', to: 'users#show'


end
