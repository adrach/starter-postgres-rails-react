class AddDiscardToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :discarded_at, :datetime
    add_index :posts, :discarded_at
  end
end
