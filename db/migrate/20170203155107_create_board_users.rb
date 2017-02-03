class CreateBoardUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :board_users do |t|
      t.references :user, foreign_key: true
      t.references :board, foreign_key: true

      t.timestamps
    end

    add_index :board_users, [:user_id, :board_id], unique: true
  end
end
