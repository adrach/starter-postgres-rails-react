# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def json_response(object, status = :ok)
    render status: status, json: object
  end
end
