# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'rest-client'

puts "Seeding."

puts 'Now 🌱  seeding recipes...'

response = RestClient.get("https://recipes.eerieemu.com/api/recipe/?format=json")
recipes = JSON.parse(response)  

recipes = recipes["results"]

recipes.map do |recipe|
    new_recipe = Recipe.create(
        foodname: recipe["name"],
        image: recipe["image_path"],
        description: recipe["description"], 
        ingredients: recipe["ingredients"], 
        instructions: recipe["instructions"],
        country: Faker::Address.country,
        servings: recipe["servings"], 
        rating: recipe["rating_value"],
    )
end

user2 = User.create(firstname: "Jane", lastname: "Doe", username: "janedoe", email: "janedoe@gmail.com" , password_digest: "")
user1 = User.create(firstname: "John", lastname: "Doe", username: "johndoe", email: "johndoe@gmail.com" , password_digest: "")


puts "✅ Done seeding!"