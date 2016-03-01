set :port, 22
set :user, "deploy"
set :deploy_via, :remote_cache
set :use_sudo, false

set :branch, "master"

set :stage, :production
set :rails_env, :production

server "37.139.12.174",
  roles: %w(web app),
  port: fetch(:port),
  user: fetch(:user),
  auth_methods: %w(publickey)
