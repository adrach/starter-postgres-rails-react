class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include Discard::Model
  default_scope -> { kept }

  after_discard do
    posts.discard_all
  end
  after_undiscard do
    posts.with_discarded.discarded.undiscard_all
  end

  has_many :posts, dependent: :destroy
end
