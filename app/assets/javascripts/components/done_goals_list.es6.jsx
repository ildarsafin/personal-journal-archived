class DoneGoalsList extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  handleGoalCheck (goal) {
    let url = "/goals/" + goal.id + "/done";
    $.ajax({
      data: {},
      url: url,
      type: "POST",
      dataType: "json",
      success: function () {
        this.props.removeGoal(goal)
      }.bind(this)
    });
  }

  handleGoalDestroy (goal) {
    let url = "/goals/" + goal.id;

    $.ajax({
      data: {},
      url: url,
      type: "DELETE",
      dataType: "json",
      success: function () {
        this.props.removeGoal(goal)
      }.bind(this)
    });
  }

  render () {
    let sortedGoals = this.props.goals.sort(function(a, b) { return b.id - a.id });
    let self = this;
    let goals = sortedGoals.map(function ( goal ) {
      return <DoneGoal
        description={ goal.description }
        key={ goal.id }
        id={goal.id}
        handleGoalDestroy={self.handleGoalDestroy.bind(self, goal)}
      />
    });

    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">Вы выполнили или осуществили</h3>
          <div className="box-tools pull-right">
            <button className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
          </div>
        </div>
        <div className="box-body">
          <div className="col-md-12">
            <ul className="todo-list">
              {goals}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
