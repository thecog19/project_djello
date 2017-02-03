class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :board_users
  has_many :shared_boards, through: :board_users, source: :board

  has_many :owned_boards, class_name: "Board"
end
