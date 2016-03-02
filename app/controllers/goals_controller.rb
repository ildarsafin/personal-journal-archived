class GoalsController < ApplicationController
  def create
    @goal = current_user.goals.create(goal_params)

    if request.xhr?
      render json: current_user.daily_achievements
    else
      redirect_to daily_achievements_url
    end
  end

  private

  def goal_params
    params.require(:goal).permit(:id, :description, :start_at, :end_at)
  end
end
