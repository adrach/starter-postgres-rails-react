# fake data seeding
10.times do |index|
    Post.create!(
        title: "Title ##{index+1}",
        content: "Content ##{index+1}",
        author: "Author ##{index+1}"
    )
end