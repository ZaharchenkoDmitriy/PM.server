class Work < ApplicationRecord
  monetize :price_cents

  belongs_to :work_category
  has_many :project_works, dependent: :destroy

  attribute :title, :string

  def json
    {
        id: id,
        title: title,
        price: price.to_f
    }
  end
end
