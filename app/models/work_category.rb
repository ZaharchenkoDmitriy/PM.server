class WorkCategory < ApplicationRecord
  attribute :title, :string

  has_many :works, dependent: :destroy

  def json_lite
    {
        id: id,
        title: title
    }
  end

  def json
    {
        id: id,
        title: title,
        works: works.map(&:json)
    }
  end
end
