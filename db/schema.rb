# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190103164532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "project_works", force: :cascade do |t|
    t.float "square"
    t.integer "price_cents", default: 0, null: false
    t.string "price_currency", default: "USD", null: false
    t.bigint "project_id"
    t.bigint "work_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_works_on_project_id"
    t.index ["work_id"], name: "index_project_works_on_work_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "address"
    t.datetime "date_start"
    t.datetime "date_end"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "work_categories", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "works", force: :cascade do |t|
    t.integer "price_cents", default: 0, null: false
    t.string "price_currency", default: "USD", null: false
    t.string "title"
    t.bigint "work_category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["work_category_id"], name: "index_works_on_work_category_id"
  end

  add_foreign_key "project_works", "projects"
  add_foreign_key "project_works", "works"
  add_foreign_key "works", "work_categories"
end
