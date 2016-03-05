$(document).ready(function(){
  var preview = $(".upload-preview");
  var preview2 = $(".upload-preview2");

  $(".image_to_upload").change(function(event){
    var input = $(event.currentTarget);
    var file = input[0].files[0];
    var reader = new FileReader();
    reader.onload = function(e){
     image_base64 = e.target.result;
     preview.attr("src", image_base64);
    };
    reader.readAsDataURL(file);
  });

  $(".image_to_upload2").change(function(event){
    var input = $(event.currentTarget);
    var file = input[0].files[0];
    var reader = new FileReader();
    reader.onload = function(e){
     image_base64 = e.target.result;
     preview2.attr("src", image_base64);
    };
    reader.readAsDataURL(file);
  });
});
