class Api::WorkCategoriesController < ApplicationController
  def index
    render json: WorkCategory.all.map(&:json)
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
