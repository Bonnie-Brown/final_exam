class AuctionSerializer < ActiveModel::Serializer

  attributes :id, :title, :description, :end_time, :price, :created_at, :updated_at, :author_full_name

  def author_full_name
      object.user&.full_name
  end

  # Associations

  has_many :bids 

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :bid_value, :created_at, :updated_at, :bidder_full_name

     def bidder_full_name
        object.user&.full_name
     end

  end

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :full_name
  end

 


end
