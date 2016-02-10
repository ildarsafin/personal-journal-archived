class DailyAchievementsController < ApplicationController
  def index
    @daily_achievement_presenter = {
      daily_achievements: DailyAchievement.last(20),
      form: {
        action: daily_achievements_url,
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }

    @goal_presenter = {
      goals: Goal.last(5),
      form: {
        action: goals_url,
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }
  end

  def create
    @daily_achievement = DailyAchievement.new(daily_achievement_params)
    @daily_achievement.save

    if request.xhr?
      render json: DailyAchievement.last(20)
    else
      redirect_to daily_achievements_path
    end
  end

  private

  def daily_achievement_params
    params.require(:daily_achievement).permit(:id, :text)
  end
end
