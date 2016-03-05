class Goal < ActiveRecord::Base
  belongs_to :user

  validates :description, presence: true

  scope :undone, -> { where(done: false) }
  scope :done, -> { where(done: true) }
end
