class CreatePostTable < ActiveRecord::Migration[5.1]
  def change
    create_table :posts, force: true do |t|
        t.text :title
        t.text :content
        t.text :author
    end
  end
end
