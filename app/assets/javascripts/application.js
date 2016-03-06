// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require react
//= require react_ujs
//= require bootstrap-wysihtml5
//= require components
//= require_tree ./dashboard_plugins

//= require_tree .

$(function () {
  $.widget.bridge('uibutton', $.ui.button);

  $(".textarea").wysihtml5();

    //jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });

  $("#start_at").val(moment())
  $("#end_at").val(moment().endOf('year'))

  //Date range as a button
  $('#daterange-btn').daterangepicker({
    ranges: {
      'В этом году': [moment(), moment().endOf('year')],
      'За сегодня': [moment(), moment()],
      'За 7 дней': [moment(), moment().add(6, 'days')],
      'За этот месяц': [moment().endOf('month'), moment().startOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start, end) {
      $('#start_at').val(start)
      $('#end_at').val(end)
  });
});

