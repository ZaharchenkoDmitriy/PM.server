class Project < ApplicationRecord
  has_many :project_works

  attr_accessor :project_works
end
