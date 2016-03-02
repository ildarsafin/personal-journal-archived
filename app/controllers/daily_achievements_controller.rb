class DailyAchievementsController < ApplicationController
  def index
    @daily_achievement_presenter = {
      daily_achievements: current_user.daily_achievements,
      form: {
        action: daily_achievements_url,
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }

    @goal_presenter = {
      goals: current_user.goals,
      form: {
        action: goals_url,
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }
  end

  def create
    @daily_achievement = current_user.daily_achievements.create(daily_achievement_params)

    if request.xhr?
      render json: current_user.daily_achievements
    else
      redirect_to daily_achievements_path
    end
  end

  private

  def daily_achievement_params
    params.require(:daily_achievement).permit(:id, :text)
  end
end
