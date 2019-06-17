class Api::WorkCategoriesController < ApplicationController
  def index
    categories = WorkCategory.where('true')
    categories = !!params[:list_view] ? categories.map(&:json_lite) : categories.map(&:json)
    render json: categories
  end

  def create
    category = WorkCategory.create(title: params[:title])

    render json: category.json
  end

  def destroy
    WorkCategory.find(params[:id]).destroy
    render json: params[:work_category_id]
  end
end
