class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        recipes = Recipe.all
        render json: recipes
    end

    def show
        recipe = Recipe.find_by(id: params[:id])
        render json: recipe
    end

    def create
        puts JSON.pretty_generate(recipe_params)
        recipe = Recipe.create(recipe_params)
        render json: recipe
    end

    def update
        recipe = Recipe.find_by(id: params[:id])
        recipe.update(recipe_params)
        render json: recipe
    end

    def destroy
        recipe = Recipe.find(params[:id])
        recipe.destroy
        render json: recipe
    end

    private

    def recipe_params
        params.require(:recipe).permit(:foodname, :description, :ingredients, :instructions, :country, :servings, :rating, :image)
    end

    def record_not_found
        render json: {error: "Recipe not found"}, status: :not_found
    end

    def record_invalid
        render json: {error: "Invalid recipe"}, status: :unprocessable_entity
    end



end
