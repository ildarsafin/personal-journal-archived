class GoalBox extends React.Component {
  constructor (props, context) {
    super(props, context);

    let parsed_presenter = JSON.parse(props.presenter);
    this.state = {
      goals: parsed_presenter.goals,
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

  removeGoal (goal) {
    let goals = this.state.goals.filter(function (candidate) {
      return candidate !== goal;
    });

    this.setState({ goals: goals });
  }


  render () {
    return (
      <div>
        <GoalsList goals={ this.state.goals } removeGoal={ this.removeGoal.bind(this) } />

        <GoalForm form={ this.state.form } onGoalSubmit={ this.handleGoalSubmit.bind(this) } />
      </div>
    );
  }
};
