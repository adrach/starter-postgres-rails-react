class Post < ApplicationRecord
  include Discard::Model
  default_scope -> { kept }
  
  belongs_to :user
end
