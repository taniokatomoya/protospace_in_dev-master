class CommentsController < ApplicationController
  before_action :set_prototype
  def create
    @comment = @prototype.comments.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.html {redirect_to prototype_path(params[:prototype_id]) }
        format.json
      end
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy if @comment.user.id = current_user.id
    redirect_to prototype_path(@prototype)
    # respond_to do |format|
    #   format.html {redirect_to prototype_path(params[:prototype_id])}
    #   format.json
  end

  private
  def comment_params
    params.require(:comment).permit(:comment).merge(prototype_id: params[:prototype_id], user_id: current_user.id)
  end

  def set_prototype
    @prototype = Prototype.find(params[:prototype_id])
  end
end
