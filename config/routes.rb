# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'post#index'

  namespace :api, defaults: { format: :json } do
    resources :post, only: %i[index create show update destroy]
  end
end
