class GoalBox extends React.Component {
  constructor (props, context) {
    super(props, context);

    let parsed_presenter = JSON.parse(props.presenter);
    this.state = {
      goals: parsed_presenter.undone_goals,
      doneGoals: parsed_presenter.done_goals,
      form: parsed_presenter.form
    }
  }

  handleGoalSubmit ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ goals: data });
      }.bind(this)
    });
  }

  doneGoal (goal) {
    let goals = this.state.goals.filter(function (candidate) {
      return candidate !== goal;
    });

    let updatedDoneGoals = this.state.doneGoals;
    updatedDoneGoals.push(goal);
    this.setState({ goals: goals });
    this.setState({ doneGoals: updatedDoneGoals });
  }

  removeGoal (goal) {
    let goals = this.state.goals.filter(function (candidate) {
      return candidate !== goal;
    });

    let updatedDoneGoals = this.state.doneGoals.filter(function (candidate) {
      return candidate !== goal;
    });

    this.setState({ goals: goals });
    this.setState({ doneGoals: updatedDoneGoals });
  }


  render () {
    return (
      <div>
        <GoalsList goals={ this.state.goals } removeGoal={ this.removeGoal.bind(this) } doneGoal={ this.doneGoal.bind(this) } goal_title={this.props.goal_title} />
        <DoneGoalsList goals={ this.state.doneGoals } removeGoal={ this.removeGoal.bind(this) } done_goal_title={this.props.done_goal_title} />
        <GoalForm form={ this.state.form } onGoalSubmit={ this.handleGoalSubmit.bind(this) } goal_form={this.props.goal_form} />
      </div>
    );
  }
};
