class Goal extends React.Component {
  render () {
    let milliseconds = Date.parse(this.props.endAt) - new Date()
    let days = Math.floor(milliseconds / (1000*60*60*24));

    return (
      <li>
        <span className="handle">
          <i className="fa fa-ellipsis-v"></i>
          <i className="fa fa-ellipsis-v"></i>
        </span>
        <input type="checkbox" value="" name="" onChange={ this.props.handleGoalCheck }/>
        <span className="text">{this.props.description}</span>
        <small className="label label-danger">
        <i className="fa fa-clock-o"></i> {days} days</small>
        <div className="tools">
          <a onClick={ this.props.handleGoalDestroy }>
            <i className="fa fa-trash-o"></i>
          </a>
        </div>
      </li>
    );
  }
}
