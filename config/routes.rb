Rails.application.routes.draw do
  root :to => 'application#index'

  # namespace :api do
  #   constraints subdomain: 'api' do
  #     get 'test', action: :test, controller: 'test'
  #   end
  # end

end
