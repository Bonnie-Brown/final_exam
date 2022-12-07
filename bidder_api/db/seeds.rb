Auction.destroy_all
Bid.destroy_all
User.destroy_all

PASSWORD = "123"

30.times do

    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name

    User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}@#{last_name}.com",
    password: PASSWORD
    )
end

users = User.all


30.times do

    created_at = Faker::Date.backward(days: 365 * 5)
    end_time = Faker::Date.forward(days: rand(10..20))

    a = Auction.create(
        title: Faker::Commerce.product_name,
        description: Faker::Commerce.material,
        end_time: end_time,
        price: Faker::Commerce.price,
        user: users.sample,
        created_at: created_at,
        updated_at: created_at
    )
    if a.valid?

        bid_value = Faker::Commerce.price(range:10..100, as_string: false)

        rand(5..10).times do
            Bid.create(
                bid_value: bid_value,
                auction: a,
                user: users.sample
            )                    
        end
    end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count}  auctions", :frogs)
puts Cowsay.say("Generated #{bids.count} bids", :cow)
puts Cowsay.say("Genereated #{users.count} users", :koala)