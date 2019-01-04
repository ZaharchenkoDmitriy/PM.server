class ProjectWork < ApplicationRecord
  belongs_to :project
  belongs_to :work

  attribute :work, :Work
  attribute :project, :Project

  def json
    {
        title: work.title,
        price: work.price.to_s,
        cost: cost,
        square: square
    }
  end
end
