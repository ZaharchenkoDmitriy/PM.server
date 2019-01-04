class Project < ApplicationRecord
  has_many :project_works

  attr_accessor :project_works

  attribute :title, :string
  attribute :address, :string
  attribute :id, :integer

  def cost
    self.project_works.sum(&:cost)
  end

  def json
    {
        title: title,
        address: address,
        id: id
    }
  end
end
