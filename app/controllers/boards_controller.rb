class BoardsController < ApplicationController
  def index
    @boards = current_user.shared_boards
    render json: @boards
  end
end
