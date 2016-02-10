class GoalsList extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  render () {
    let sortedGoals = this.props.goals.sort(function(a, b) { return b.id - a.id });

    let goals = sortedGoals.map(function ( goal ) {
      return <Goal description={ goal.description } startAt={ goal.start_at } endAt={ goal.end_at } key={ goal.id } />
    });

    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">Goals</h3>
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
        <div className="box-footer text-center">
          <a href="#" className="uppercase">View All Goals</a>
        </div>
      </div>
    )
  }
}
