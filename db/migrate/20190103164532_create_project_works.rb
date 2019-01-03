class CreateProjectWorks < ActiveRecord::Migration[5.1]
  def change
    create_table :project_works do |t|
      t.float :square
      t.monetize :cost
      t.integer :project_id
      t.integer :work_id

      t.timestamps
    end
  end
end
