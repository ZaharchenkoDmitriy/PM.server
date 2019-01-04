class Project < ApplicationRecord
  has_many :project_works

  attr_accessor :project_works

  attr_accessor :title
  attr_accessor :address
  
  attr_reader :id
  def cost
    self.project_works.sum(&:cost)
  end

  def json
    {
        title: self.title,
        id: self.id
    }
  end
end
