class Work < ApplicationRecord
  monetize :price_cents

  attribute :title, :string

  def json
    {
        title: title,
        price: price
    }
  end
end
