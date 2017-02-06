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
    @list = current_user.owned_lists.build(list_params)
    if @list.save
      current_user.shared_lists << @list
      render json: @list
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def edit


  end
end
