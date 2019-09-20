# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def serialize_records(records)
    ActiveModelSerializers::SerializableResource.new(records.to_a)
  end
end
