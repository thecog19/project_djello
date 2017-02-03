puts "Destroying everything..."

User.destroy_all
Board.destroy_all

puts "Creating users..."

User.create(
  first_name: 'User',
  last_name:  'Userman',
  email:      'user@mail.com',
  password:   'password',
  password_comfirmation: 'password'
)