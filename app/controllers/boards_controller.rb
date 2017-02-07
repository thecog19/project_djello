class BoardsController < ApplicationController
  def index
    @boards = current_user.shared_boards
    render json: @boards
  end

  def show
    @board = Board.find(params[:id])
    if @board
      respond_to do |format|
        format.json
      end
    else 
      render json: "No board found", status: 404
    end
  end

  def destroy 
    @board = Board.find(params[:id])
    if @board.destroy
      respond_to do |format|
        format.json {@board}
      end
    else 
      render json: "No board found", status: 404
    end

  end

  def create
    @board = current_user.owned_boards.build(board_params)
    if @board.save
      current_user.shared_boards << @board
      render json: @board
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])
    respond_to do |format|
      if @board.update(board_params)
        format.json { render json: @board, status: 201 }
      else
        format.json { render json: { errors: @board.errors.full_messages, status: :unprocessable_entity } }
      end
    end
  end

  private

  def board_params
    params.require(:board).permit(:title, :description)
  end
end
