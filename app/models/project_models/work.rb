class Work < ApplicationRecord
  monetize :price_cents

  def json
    {
        title: self.title,
        price: self.price
    }
  end
end
