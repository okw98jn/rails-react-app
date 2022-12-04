class Post < ApplicationRecord
  validates :title, presence: true, length: { maximum: 15 }
  validates :body, presence: true, length: { maximum: 255 }
end
