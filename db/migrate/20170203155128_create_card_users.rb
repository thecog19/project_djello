class CreateCardUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :card_users do |t|
      t.references :user, foreign_key: true
      t.references :card, foreign_key: true

      t.timestamps
    end
    add_index :card_users, [:user_id, :card_id], unique: true
  end
end
