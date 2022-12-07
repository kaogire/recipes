class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :foodname
      t.txt :ingredients
      t.intege :servings
      t.string :country
      t.integer :rating
      t.string :image
      t.txt :description
      t.txt :instructions

      t.timestamps
    end
  end
end
