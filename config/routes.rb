Rails.application.routes.draw do
  root :to => 'application#index'

  namespace :api, format: 'json' do
    resources :work_categories do
      resources :works
    end

    resources :projects do
      resources :project_works
    end
  end
end
