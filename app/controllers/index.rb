require 'yelp'
require 'geocoder'

client = Yelp::Client.new({ consumer_key: "KQlW2qJjSqmX0ZR7nGKS7Q",
                          consumer_secret: 'Z9DxVzldLc8UHnJhqKnjOEbI1pg',
                          token: "dib4YLCSfTEg4otosEG70d0cvtfPDXlW",
                          token_secret: "yKzOs-hCbbN2PRixgBv9YCRLBFo"
                        })

get '/' do 
  erb :index
end

get '/yelp_search' do
  find_input = params[:find_input]
  start_address = params[:from]
  dest_address = params[:to]
  point = Geocoder::Calculations.geographic_center([start_address,dest_address])
  coordinates = {latitude: point[0], longitude: point[1]}
  response = client.search_by_coordinates(coordinates, { term: "#{find_input}",limit: 15, sort: 1})
  response.to_json

end

