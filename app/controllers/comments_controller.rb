class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

    def create
        comment = Comment.create(comment_params)
        render json: comment
    end

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        render json: comment
    end

    def logout
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.require(:comment).permit(:comment, :user_id, :recipe_id)
    end

    def record_not_found
        render json: {error: "Comment not found"}, status: :not_found
    end

    def record_invalid
        render json: {error: "Invalid comment"}, status: :unprocessable_entity
    end


end
