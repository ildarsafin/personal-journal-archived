class DoneGoal extends React.Component {
  render () {
    return (
      <li className="">
        <span className="text text-muted"><s>{this.props.description}</s></span>
        <div className="tools">
          <a onClick={ this.props.handleGoalDestroy }>
            <i className="fa fa-trash-o"></i>
          </a>
        </div>
      </li>
    );
  }
}
