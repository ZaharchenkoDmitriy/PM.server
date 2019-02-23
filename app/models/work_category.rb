class WorkCategory < ApplicationRecord
  attribute :title, :string

  has_many :works

  def json
    {
        id: id,
        title: title,
        works: works.map(&:json)
    }
  end
end
