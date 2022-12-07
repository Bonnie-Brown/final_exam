class User < ApplicationRecord
    
    has_secure_password

    has_many :auctions, dependent: :destroy
    has_many :bids, dependent: :destroy

    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX


end
