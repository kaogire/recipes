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

  # get '/profile', to: 'users#profile'
  # get '/search', to: 'recipes#search'
  # get '/search/:id', to: 'recipes#search'
  # get '/search/:id/:country', to: 'recipes#search'
  # get '/search/:id/:country/:servings', to: 'recipes#search'
  # get '/search/:id/:country/:servings/:rating', to: 'recipes#search'
  # get '/search/:id/:country/:servings/:rating/:ingredients', to: 'recipes#search'
  # get '/search/:id/:country/:servings/:rating/:ingredients/:instructions', to: 'recipes#search'
  # get '/search/:id/:country/:servings/:rating/:ingredients/:instructions/:foodname', to: 'recipes#search'
  # get '/search/:id/:country/:servings/:rating/:ingredients/:instructions/:foodname/:description', to: 'recipes#search'
  # get '/search/:id/:country/:servings/:rating/:ingredients/:instructions/:foodname/:description/:image', to: 'recipes#search'
  # get '/search/:id/:country/:servings/:rating/:ingredients/:instructions/:foodname/:description/:image/:user_id', to: 'recipes#search'
  # get '/search/:id/:country/:servings/:rating/:ingredients/:instructions/:foodname/:description/:image/:user_id/:comment_id', to: 'recipes#search'
end
