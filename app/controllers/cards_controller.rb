class CardsController < ApplicationController

  def destroy 
    @card = Card.find(params[:id])
    if @card.destroy
      respond_to do |format|
        format.json {@card}
      end
    else 
      render json: "No card found", status: 404
    end

  end

  def create
    @card = current_user.cards_used.build(card_params)
    @card.user_id = current_user.id
    if @card.save
      render json: @card
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Card.find(params[:id])

    respond_to do |format|
      if @card.update(card_params)
        format.json { render json: @card, status: 201 }
      else
        format.json { render json: { errors: @card.errors.full_messages, status: :unprocessable_entity } }
      end
    end
  end
  private 
  def card_params
    params.require(:card).permit(:title, :description, :list_id)
  end
end

