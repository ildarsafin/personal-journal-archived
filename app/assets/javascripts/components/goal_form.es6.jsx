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
      <div className="box box-success">
        <div className="box-header">
          <h3 className="box-title">{this.props.goal_form.title}</h3>
        </div>
        <div className="box-body">
          <form ref="form" className="goal-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit.bind(this) }>
            <input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } />
            <div className="form-group">
              <label>{this.props.goal_form.labels.goal}</label>
              <input ref="description" type="text" name="goal[description]" className="form-control" placeholder={this.props.goal_form.placeholders.goal}/>
            </div>
            <div className="form-group">
              <label>{this.props.goal_form.labels.time_range}:</label>
              <input ref="start_at" type="hidden" name="goal[start_at]" id="start_at"/>
              <input ref="end_at" type="hidden" name="goal[end_at]" id="end_at"/>
              <div className="input-group">
                <button type="button" className="btn btn-default pull-right" id="daterange-btn">
                  <i className="fa fa-calendar"></i> {this.props.goal_form.labels.achievement_date}
                  <i className="fa fa-caret-down"></i>
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-default btn-block btn-flat">{this.props.goal_form.add}</button>
          </form>
        </div>
      </div>
    )
  }
}
