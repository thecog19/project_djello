class CardsController < ApplicationController

  def destroy 
    @card = card.find(params[:id])
    if @card.destroy
      respond_to do |format|
        format.json {@card}
      end
    else 
      render json: "No card found", status: 404
    end

  end

  def create
    @card = current_user.owned_cards.build(card_params)
    if @card.save
      current_user.shared_cards << @card
      render json: @card
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def edit


  end
end

