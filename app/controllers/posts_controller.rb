class PostsController < ApplicationController
# Use respond_with to return json

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params)
  end

  def show
    respond_with Post.find(params[:id])
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    respond_with post
  end

private

  def post_params
    params.require(:post).permit(:title, :description, :link)
  end
end
