class Api::ProjectWorksController < ApplicationController
  def index
    render json: ProjectWork.where(project_id: params[:project_id]).map(&:json)
  end
end
