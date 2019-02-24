class CreateProjectWorks < ActiveRecord::Migration[5.1]
  def change
    create_table :project_works do |t|
      t.float :square
      t.monetize :price
      t.belongs_to :project, index: true, foreign_key: true
      t.belongs_to :work, index: true, foreign_key: true

      t.timestamps
    end
  end
end
