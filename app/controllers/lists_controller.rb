class ListsController < ApplicationController
  def destroy 
    @list = List.find(params[:id])
    if @list.destroy
      respond_to do |format|
        format.json {@list}
      end
    else 
      render json: "No list found", status: 404
    end

  end

  def create
    @list = List.new(list_params)
    @list.user_id = current_user.id
    if @list.save
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])

    respond_to do |format|
      if @list.update(list_params)
        format.json { render json: @list, status: 201 }
      else
        format.json { render json: { errors: @list.errors.full_messages, status: :unprocessable_entity } }
      end
    end
  end

  def list_params
    params.require(:list).permit(:title, :description, :board_id)
  end
end
