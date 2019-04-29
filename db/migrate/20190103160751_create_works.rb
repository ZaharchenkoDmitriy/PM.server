class CreateWorks < ActiveRecord::Migration[5.1]
  def change
    create_table :works do |t|
      t.monetize :price
      t.string :title
      t.belongs_to :work_category, index: true, foreign_key: true

      t.timestamps
    end
  end
end
