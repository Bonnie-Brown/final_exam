Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '127.0.0.1:5000', 'localhost:5000', '127.0.0.1:9999', 'localhost:9999', '127.0.0.1:3000', 'localhost:3000'  # whitelist domains
    resource(
      '/api/*', # limit requests to paths that look like /api
      headers: :any, # all the requests to contain any headers
      credentials: true, # because we're sending cookies with CORS we must add this flag
      methods: [:get, :post, :patch, :put, :options, :delete] # allow these http verbs
    )
  end
end