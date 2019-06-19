# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project = Project.create(title: "Кемерово",
                         address: "Шального 9",
                         date_start: Date.today - 1,
                         date_end: Date.today + 10)

category = WorkCategory.create(title: 'Text categories')

for i in 1..3 do
  work = Work.create(title: "Название работы #{i}", price: 2.30 + i, work_category_id: category.id)
  ProjectWork.create(project_id: project.id, work_id: work.id, square: 2.3 + i)
end
