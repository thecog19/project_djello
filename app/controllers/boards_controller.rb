class BoardsController < ApplicationController
  def index
    @board = current_user.boards
    render json: @board
  end
end
