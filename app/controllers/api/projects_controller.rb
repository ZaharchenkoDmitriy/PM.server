class Api::ProjectsController < ApplicationController
  def index
    puts params

    render json: Project.all.map(&:json)
  end

  def show
    render json: Project.find(params[:id]).json
  end

  def create
    params[:project].permit!

    render json: Project.create(params[:project]).json
  end

  def destroy
    Project.find(params[:id]).destroy
    render json: params[:id]
  end
end
