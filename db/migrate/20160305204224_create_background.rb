class CreateBackground < ActiveRecord::Migration
  def change
    create_table :backgrounds do |t|
      t.string :background, null: false
      t.boolean :active, default: true
      t.references :user, null:false, index: true
    end
  end
end
