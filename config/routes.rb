Rails.application.routes.draw do
  root :to => 'application#index'

  namespace :api do
    constraints subdomain: 'api' do
    end
  end
end
