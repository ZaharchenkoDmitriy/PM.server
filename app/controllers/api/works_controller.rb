class Api::WorksController < ApplicationController
  def show
    render json: Work.find(params[:id]).json
  end

  def create
    render json: Work.create(title: params[:title],
                             price: params[:price],
                             work_category_id: params[:work_category_id]).json
  end

  def delete
    Work.find(params[:work_id]).destroy
    render json {id : params[:work_id]}
  end
end
