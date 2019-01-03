class ProjectWork < ApplicationRecord
  belongs_to :project
  belongs_to :work

  attr_accessor :work
  attr_accessor :project
end
