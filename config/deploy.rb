# config valid only for current version of Capistrano
lock "3.4.0"

set :application, "life_diary"
set :repo_url, "git@gitlab.com:life_diary/product.git"

set :deploy_to, "/home/deploy/life_diary"

set :linked_files, %w(config/database.yml)
set :linked_dirs, %w(log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system)

# Default value for keep_releases is 5
set :keep_releases, 5

namespace :deploy do
  after :publishing, :copy_database_config do
    on roles(:all), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after :publishing, :prepare do
    on roles(:all) do
      within release_path do
        execute :bundle, "install"
        execute "#{current_path}/bin/setup"
        execute :rake, "assets:precompile"
      end
    end
  end
end
