Boards: 
  Has Many Lists
  has many members

Board: 
  title string
  descriptionn text
  owner_id

Lists:
  Have many cards

Lists: 
  owner_id
  board_id
  title
  description

Cards:
  have many activities

Card
  priority
  completable
  title
  description
  owner_id

UserBoardTable:
  user_id 
  board_id

UserCardTable:
  user_id
  card_id

User:
  have many lists
  have many activities

Users: 
  username
  email
  picture


Activities: 
  card_id
  user_id
  description
