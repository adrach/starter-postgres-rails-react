class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :content

  def author
    object.user&.email
  end
end
