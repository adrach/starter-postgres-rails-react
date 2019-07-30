# fake data seeding

require 'faker'

user = User.create!(email: "user@test.com", password: "123456", :password_confirmation => "123456")

10.times do
  Post.create!(
    title: Faker::Lorem.sentence,
    content: Faker::Lorem.paragraph,
    user_id: user.id
  )
end
