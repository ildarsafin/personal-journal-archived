class DailyAchievement extends React.Component {
  render () {
    let was = moment(this.props.createdAt, "YYYYMMDDHHmm").fromNow();

    return (
      <li>
        <ul className="timeline">
          <li className="time-label">
            <span className="bg-blue">
              {was}
            </span>
          </li>

          <li>
            <i className="fa fa-clock-o bg-blue"></i>
            <div className="timeline-item">
              <div className="timeline-body">
                <div><span dangerouslySetInnerHTML={{__html: this.props.text}}></span></div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}
