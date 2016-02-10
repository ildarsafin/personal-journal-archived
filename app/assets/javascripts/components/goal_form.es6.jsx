class GoalForm extends React.Component {
  handleSubmit (event) {
    event.preventDefault();

    var description = this.refs.description.value.trim();
    var startAt = this.refs.start_at.value.trim();
    var endAt = this.refs.end_at.value.trim();

    // validate
    if (!description && !startAt && !endAt)
      return false;

    // submit
    var formData = $(this.refs.form).serialize();

    this.props.onGoalSubmit( formData, this.props.form.action );

    // reset form
    this.refs.description.value = "";
  }

  render () {
    return (
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">Add Goal</h3>
        </div>
        <div className="box-body">
          <form ref="form" className="goal-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit.bind(this) }>
            <input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } />
            <div className="form-group">
              <label>Goal Text</label>
              <input ref="description" type="text" name="goal[description]" className="form-control" placeholder="Enter ..."/>
            </div>
            <div className="form-group">
              <label>Date range button:</label>
              <input ref="start_at" type="hidden" name="goal[start_at]" id="start_at"/>
              <input ref="end_at" type="hidden" name="goal[end_at]" id="end_at"/>
              <div className="input-group">
                <button type="button" className="btn btn-default pull-right" id="daterange-btn">
                  <i className="fa fa-calendar"></i> Date range picker
                  <i className="fa fa-caret-down"></i>
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-default btn-block btn-flat">Add Goal</button>
          </form>
        </div>
      </div>
    )
  }
}
