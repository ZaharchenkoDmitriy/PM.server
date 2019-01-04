class ProjectWork < ApplicationRecord
  belongs_to :project
  belongs_to :work

  attribute :work
  attribute :project

  attribute :work_id, :integer
  attribute :project_id, :integer

  def json
    {
        title: work.title,
        price: work.price.to_s,
        cost: cost,
        square: square
    }
  end
end
