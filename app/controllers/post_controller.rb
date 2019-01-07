class PostController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]

    # GET /index
    def index
      @welcome_msg = "Welcome to ReactOnRails demo"
    end

    # GET /posts
    def get_posts
      @posts = Post.order('id desc')
      json_response(@posts)
    end
  
    # POST /posts
    def create
      @post = Post.create!(title:params[:title], author:params[:author], content:params[:content])
      json_response(@post, :created)
    end
  
    # GET /posts/:id
    def show
      json_response(@post)
    end
  
    # PUT /posts/:id
    def update
      @post.update!(id: params[:id], title:params[:title], author:params[:author], content:params[:content])
      json_response(@post, :created)
    end
  
    # DELETE /posts/:id
    def destroy
      @post.destroy
      json_response(@post.id)
    end
  
    private

    def set_post
      @post = Post.find_by_id(params[:id])
    end

    def json_response(object, status = :ok)
      render status: status, json: object
    end
end
  