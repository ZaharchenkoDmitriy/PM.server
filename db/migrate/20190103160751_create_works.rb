class CreateWorks < ActiveRecord::Migration[5.1]
  def change
    create_table :works do |t|
      t.monetize :price
      t.string :title
      t.integer :category_id

      t.timestamps
    end
  end
end
