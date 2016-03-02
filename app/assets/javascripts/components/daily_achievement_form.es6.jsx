class DailyAchievementForm extends React.Component {
  handleSubmit (event) {
    event.preventDefault();

    var text = this.refs.text.value.trim();

    // validate
    if (!text)
      return false;

    // submit
    var formData = $(this.refs.form).serialize();

    this.props.onAchievementSubmit( formData, this.props.form.action );

    // reset form
    this.refs.text.value = "";
  }

  render () {
    return (
      <div className="box box-info">
        <div className="box-header">
          <h3 className="box-title">Достижения дня <small>Запишите все, что вы сделали за сегодня</small></h3>
          <div className="pull-right box-tools">
            <button className="btn btn-default btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
          </div>
        </div>
        <div className="box-body pad">
          <form ref="form" className="daily-achievement-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit.bind(this) }>
            <input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } />
            <textarea ref="text" className="textarea achievement-textarea" name="daily_achievement[text]" placeholder="Опишите свой сегодняшний день. Как он прошел. Чего достигли сегодня. С чем не справились. Поделитесь своими впечатлениями."></textarea>
            <button type="submit" className="btn btn-block btn-default btn-flat">Добавить Достижение</button>
          </form>
        </div>
      </div>
    )
  }
}
