class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :address
      t.datetime :date_start
      t.datetime :date_end

      t.timestamps
    end
  end
end
