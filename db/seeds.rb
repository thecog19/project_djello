puts "Destroying everything..."

User.destroy_all
Board.destroy_all

puts "Creating users..."

User.create(
  first_name: 'User',
  last_name:  'Userman',
  email:      'user@mail.com',
  password:   'password'
)

puts "User created, log in with user@email.com, and password: password"
puts "Creating Boards"

5.times do |time|
  board = Board.create(
    title: Faker::StarWars.planet,
    description: Faker::StarWars.quote,
    user_id: User.first.id
  )
  User.first.shared_boards << board
end

puts "5 boards created"
