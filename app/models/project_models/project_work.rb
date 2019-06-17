class ProjectWork < ApplicationRecord
  monetize :price_cents

  belongs_to :project
  belongs_to :work

  attribute :work
  attribute :project

  attribute :work_id, :integer
  attribute :project_id, :integer

  def json
    {
        id: id,
        title: work.title,
        price: price.present? ? price : work.price.to_s,
        cost: (square * work.price).to_s,
        square: square
    }
  end
end
