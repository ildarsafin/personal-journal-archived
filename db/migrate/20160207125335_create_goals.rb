class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string  :description, null: false
      t.datetime  :start_at, null: false
      t.datetime  :end_at, null: false
      t.boolean :done, default: false

      t.references :user, null:false, index: true
    end
  end
end
