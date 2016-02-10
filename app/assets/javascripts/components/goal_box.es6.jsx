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

  render () {
    return (
      <div>
        <GoalsList goals={ this.state.goals } />
        <GoalForm form={ this.state.form } onGoalSubmit={ this.handleGoalSubmit.bind(this) } />
      </div>
    );
  }
};
