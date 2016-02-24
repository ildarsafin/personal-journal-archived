source "https://rubygems.org"

ruby "2.3.0"

gem "rails", "4.2.5.1"
gem "pg"

gem "sass-rails", "~> 5.0"
gem "bootstrap-sass"
gem "uglifier", ">= 1.3.0"
gem "therubyracer", platforms: :ruby
gem "jquery-rails"
gem "react-rails"
gem "turbolinks"
gem "carrierwave"
gem "cloudinary"
gem "autoprefixer-rails"

# all other gems
gem "devise"
gem "kaminari"
gem "responders"
gem "seedbank"
gem "pundit"
gem "slim"
gem "thin"
gem "acts_as_list"
gem "resque"
gem "kaminari"
gem "simple_form"

group :staging, :production do
  gem "rails_12factor"

  gem "capistrano"
  gem "capistrano-bundler"
  gem "capistrano-rails"
end

group :test do
  gem "simplecov", require: false
  gem "capybara"
  gem "capybara-webkit"
  gem "database_cleaner"
  gem "email_spec"
  gem "formulaic"
  gem "launchy"
  gem "shoulda-matchers", require: false
  gem "timecop"
  gem "webmock", require: false
end

group :development, :test do
  gem "awesome_print"
  gem "brakeman", "~>3.0.5", require: false
  gem "bundler-audit"
  gem "byebug"
  gem "dotenv-rails"
  gem "factory_girl_rails"
  gem "fuubar", "~> 2.0.0"
  gem "jasmine", "> 2.0"
  gem "jasmine-jquery-rails"
  gem "pry-rails"
  gem "rails_best_practices", "~> 1.15.7"
  gem "rspec-rails", "~> 3.0"
  gem "rubocop"
  gem "scss_lint", require: false
end

group :development do
  gem "bullet"
  gem "foreman"
  gem "letter_opener"
  gem "quiet_assets"
  gem "spring"
  gem "spring-commands-rspec"
  gem "web-console", "~> 2.0"
  gem "guard-rspec", require: false
end

