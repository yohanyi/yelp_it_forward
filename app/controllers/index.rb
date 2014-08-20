require 'yelp'
require 'httparty'


client = Yelp::Client.new({ consumer_key: "KQlW2qJjSqmX0ZR7nGKS7Q",
                          consumer_secret: 'Z9DxVzldLc8UHnJhqKnjOEbI1pg',
                          token: "rVGC_6ENquuEMC9pK6-fo0kvTIPaEKU7",
                          token_secret: "8d2Id_xOvBO-ze-IXjJtuiV4B7Q"
                        })
  # Yelp.client.search('San Francisco', { term: 'food' })




get '/' do 
  erb :index
end

get '/yelp_search' do
  city_input = params[:city_input]
  find_input = params[:find_input]
  @yelp_data = client.search("#{city_input}", { term: "#{find_input}",limit: 3, sort: 1})
  erb :yelp_data
end

