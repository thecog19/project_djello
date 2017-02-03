class Board < ApplicationRecord
  belongs_to :user
  has_many :lists, dependent: :destroy

  has_many :board_users, dependent: :destroy
  has_many :users, through: :board_users
end
