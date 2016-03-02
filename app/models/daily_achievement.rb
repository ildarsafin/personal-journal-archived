class DailyAchievement < ActiveRecord::Base
  belongs_to :user

  validates :text, uniqueness: true, presence: true
end
