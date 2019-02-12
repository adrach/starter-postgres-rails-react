class Api::BaseController < ApplicationController
  respond_to :json

  private

  rescue_from ActiveRecord::RecordInvalid, with: :render_active_record_errors
  def render_active_record_errors(e)
    render json: { errors: [e.message] }
  end
end
