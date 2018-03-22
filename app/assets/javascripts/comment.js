$(document).on('turbolinks:load', function() {
  function buildHTML(comment){
    if(comment.user_avatar !== null){
      var avatar = `${comment.user_avatar}`
    }else{
      var avatar = ""
    }
    var html = `<div class="comment" data-comment-id="${comment.id}">
                  <div class="left-content">
                    <a href="/users/${comment.user_id}">
                      <img alt="64x64" data-holder-rendered="true" data-src="holder.js/64x64" style="width: 64px; height: 64px;" class="media-object" src=${avatar}>
                    </a>
                    <div class="delete_button">
                      <a href="/users/1"></a>
                      <a rel="nofollow" data-method="delete" href="/prototypes/${comment.prototype_id}/comments/${comment.id}">delete</a>
                    </div>
                  </div>
                  <div class="right-content">
                    <div class="right-content__name">
                      <a href="/users/${comment.user_id}">${comment.user_name}</a>
                    </div>
                    <div class="right-content__text">
                      ${comment.comment}
                    </div>
                  </div>
                </div>`
      return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(json){
      console.log(json);
      var html = buildHTML(json);
      $('#comment_comment').val("")
      $('#comments_list').append(html)
      $("#comments_list").scrollTop($("#comments_list")[0].scrollHeight)
    })
    .fail(function(){
      alert('error');
    })
  })
});
