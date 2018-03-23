$(document).ready(function(){
  $("#tag").keydown(function(e){
    if(e.which == 13){
      var formdata = $('#toukouform [name=tag]').val();
      $(".taglists").append('<li id="taglistkakomi">'+'<span id="taglist">'+formdata+'</span>'+'<span id="kobetsusakujo">'+'<a href="#">'+"(削除)"+'</a>'+'</span>'+'</li>');
      $('#tag').val('');
      return false;
    }
  });
// 一括削除
  $(".sakujo").click(function(){
  $(".taglists").empty();
  })
// 個別削除
  $(document).on("click", "#kobetsusakujo", function(){
    $("#taglistkakomi").remove();
    return false;
  })

});

