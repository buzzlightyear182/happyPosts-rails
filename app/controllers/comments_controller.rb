class CommentsController < ApplicationController

  def create
    post = Post.find(params[:post_id])
    comment = post.comments.create(comments_params)
    respond_with post,comment
  end

  def show
  end

  def upvote
    post = Post.find(params[:post_id])
    comment = post.comments.find(params[:id])
    comment.increment!(:upvotes)
    respond_with post,comment
  end

private

  def comments_params
    params.require(:comment).permit(:body)
  end

end
