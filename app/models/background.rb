class Background < ActiveRecord::Base
  belongs_to :user

  mount_uploader :background, BackgroundUploader

  validates :background, presence: true

  scope :active, -> { where(active: true) }
end
