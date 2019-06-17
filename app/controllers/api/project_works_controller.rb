class Api::ProjectWorksController < ApplicationController
  def index
    render json: ProjectWork.where(project_id: params[:project_id]).map(&:json)
  end

  def create
    work = ProjectWork.create({
      project_id: params[:project_id],
      price: params[:price],
      square: params[:square],
      work_id: params[:id]
    })
    render json: work.json
  end

  def destroy
    work = ProjectWork.find(params[:id])
    work.destroy
    render json: work
  end
end
