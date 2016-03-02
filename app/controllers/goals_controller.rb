class GoalsController < ApplicationController
  def create
    @goal = current_user.goals.create(goal_params)

    if request.xhr?
      render json: current_user.goals.undone
    else
      redirect_to daily_achievements_url
    end
  end

  def done
    @goal = Goal.find(params[:goal_id])

    @goal.update_attributes(done: true)

    render json: {}
  end

  def destroy
    @goal = Goal.find(params[:id])

    @goal.destroy

    render json: {}
  end

  private

  def goal_params
    params.require(:goal).permit(:id, :description, :start_at, :end_at)
  end
end
