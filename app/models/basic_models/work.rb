class Work < ApplicationRecord
  monetize :price_cents

  belongs_to :work_category

  attribute :title, :string

  def json
    {
        title: title,
        price: price.to_f
    }
  end
end
