class Project < ApplicationRecord
  has_many :project_works

  attr_accessor :project_works

  def cost
    self.project_works.sum(&:cost)
  end

  def json
    project_cost_selection = ActiveRecord::Base.connection.execute <<-SQL
      select sum(pw.square * w.price_cents) project_cost from project_works pw
      join works w on w.id = pw.work_id
      where pw.project_id = #{id}
    SQL

    {
        title: title,
        address: address,
        projectCost: project_cost_selection.to_a.first['project_cost'] / 100.0,
        id: id,
        dateStart: date_start,
        dateEnd: date_end
    }
  end
end
