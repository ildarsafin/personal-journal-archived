class DailyAchievementBox extends React.Component {
  constructor (props) {
    super(props);

    let parsed_presenter = JSON.parse(props.presenter);

    this.state = {
      dailyAchievements: parsed_presenter.daily_achievements,
      form: parsed_presenter.form
    }
  }

  handleDailyAchievementSubmit ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ dailyAchievements: data });
      }.bind(this)
    });
  }

  render () {
    return (
      <div>
        <DailyAchievementForm form={ this.state.form } onAchievementSubmit={ this.handleDailyAchievementSubmit.bind(this) } />
        <DailyAchievementsList dailyAchievements={ this.state.dailyAchievements } />
      </div>
    )
  }
};

