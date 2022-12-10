class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.string :content
      t.string :image_url
      t.integer :recipe_id

      t.timestamps
    end
  end
end
