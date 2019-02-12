class PostController < ApplicationController
  before_action :authenticate_user!

  def index
    @welcome_msg = "Welcome to ReactOnRails demo"
  end
end
