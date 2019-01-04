class ProjectWork < ApplicationRecord
  belongs_to :project
  belongs_to :work

  attr_accessor :work
  attr_accessor :project

  def json
    {
        title: self.work.title,
        price: self.work.price.to_s,
        cost: self.cost,
        square: self.square
    }
  end
end
