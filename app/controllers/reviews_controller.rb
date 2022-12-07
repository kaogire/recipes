class ReviewsController < ApplicationController
    def create
        review =  Review.create!(review_params)
        render json: review
    end

    def index
        review = Review.all
        render json: review
    end

    def show
        review = find_review
        render json: review
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review
    end

    def logout
        review = find_review
        review.destroy
        head :no_content
    end

    private 

    def review_params
        params.permit(:user_id,:content,:image_url)
    end

    def find_review
        Review.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
