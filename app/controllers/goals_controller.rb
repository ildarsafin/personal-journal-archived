class GoalsController < ApplicationController
  def create
    @goal = Goal.new(goal_params)
    @goal.save

    if request.xhr?
      render json: Goal.last(5)
    else
      redirect_to daily_achievements_url
    end
  end

  private

  def goal_params
    params.require(:goal).permit(:id, :description, :start_at, :end_at)
  end
end
