class CreateDailyAchievements < ActiveRecord::Migration
  def change
    create_table :daily_achievements do |t|
      t.text :text, null: false

      t.references :user, null:false, index: true

      t.timestamps null: false
    end
  end
end
