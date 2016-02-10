class DailyAchievementsList extends React.Component {
  render () {
    let sortedDailyAchievements = this.props.dailyAchievements.sort(function(a, b) { return b.id - a.id });

    let dailyAchievements = sortedDailyAchievements.map(function ( da ) {
      return <DailyAchievement text={ da.text } createdAt={ da.created_at } key={ da.id } />
    });

    return (
      <ul className="timeline">
        { dailyAchievements }

        <li>
          <i className="fa fa-clock-o bg-gray"></i>
        </li>
      </ul>
    )
  }
}

