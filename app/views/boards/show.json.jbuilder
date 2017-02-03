json.id @board.id
json.title @board.title
json.description @board.description

json.lists @board.lists do |list|
  json.id list.id
  json.title list.title
  json.description list.description

  json.cards list.cards do |card|
    json.id card.id
    json.title card.title
    json.description card.description
    json.priority card.priority
    json.complete card.complete
  end
end