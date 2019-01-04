Rails.application.routes.draw do
  root :to => 'application#index'

  namespace :api, format: 'json' do
    resources :projects do
      resources :works
    end
  end
end
