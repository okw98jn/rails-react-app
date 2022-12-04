3.times do |n|
  post = Post.new(
    title: "投稿#{n}",
    body: "内容#{n}"
  )
  post.save!
end
