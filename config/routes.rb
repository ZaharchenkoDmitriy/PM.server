Rails.application.routes.draw do

  root :to => 'test#test'

  # namespace :api do
  #   constraints subdomain: 'api' do
  #     get 'test', action: :test, controller: 'test'
  #   end
  # end

end
