class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :avatar, AvatarUploader

  validates :email, presence: true

  has_many :goals
  has_many :daily_achievements

  def name_or_email
    return full_name if full_name.present?

    email
  end
end
