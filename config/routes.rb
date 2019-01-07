Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'post#index'

  # CRUD
  resources :post, except: :index
  get '/post' => 'post#get_posts'
end
