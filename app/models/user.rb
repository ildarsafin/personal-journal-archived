class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :avatar, AvatarUploader

  validates :email, presence: true

  has_many :goals

  has_many :daily_achievements

  has_many :backgrounds

  def active_background_url
    background = backgrounds.active.first
    background.background_url if background
  end

  def name_or_email
    return full_name if full_name.present?

    email
  end
end
