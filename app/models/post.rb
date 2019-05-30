# == Schema Information
#
# Table name: posts
#
#  id           :bigint           not null, primary key
#  content      :text
#  discarded_at :datetime
#  title        :text
#  user_id      :bigint
#
# Indexes
#
#  index_posts_on_discarded_at  (discarded_at)
#  index_posts_on_user_id       (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

class Post < ApplicationRecord
  include Discard::Model
  default_scope -> { kept }

  belongs_to :user
end
