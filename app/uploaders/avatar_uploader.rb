class AvatarUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  process convert: "png"
  process tags: ["user_avatar"]

  process resize_to_fill: [500, 500, :center]

  version :thumbnail do
    resize_to_fit(100, 100)
  end
end
