require 'yelp'
require 'httparty'


client = Yelp::Client.new({ consumer_key: "KQlW2qJjSqmX0ZR7nGKS7Q",
                          consumer_secret: 'Z9DxVzldLc8UHnJhqKnjOEbI1pg',
                          token: "dib4YLCSfTEg4otosEG70d0cvtfPDXlW",
                          token_secret: "yKzOs-hCbbN2PRixgBv9YCRLBFo"
                        })
  # Yelp.client.search('San Francisco', { term: 'food' })




get '/' do 
  p client
  erb :index
end

get '/yelp_search' do
  # p params
  find_input = params[:find_input]
  start_address = params[:from]
  dest_address = params[:to]
  response = client.search("#{start_address}", { term: "#{find_input}",limit: 3, sort: 1})
  response.to_json
  # name = response.businesses[0].name
  # p response.businesses[0].name

  # p @data.display_address
  # p @data.url
  # p @data.phone
  # p @data.snippet_text
  # p @data.id
end

