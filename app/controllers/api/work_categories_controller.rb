class Api::WorkCategoriesController < ApplicationController
  def index
    render json: WorkCategory.all.map(&:json)
  end

  def create
    category = WorkCategory.create(title: params[:title])

    render json: category.json
  end
end
