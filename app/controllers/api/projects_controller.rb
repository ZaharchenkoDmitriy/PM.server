class Api::ProjectsController < ApplicationController
  def index
    render json: Project.all.map(&:json)
  end
end
