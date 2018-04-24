require 'rails_helper'

describe SpotifyController do

  it 'successfully gets an artist' do
    artist = 'Justin Bieber'

    get :get_artist, params: {artist: artist}, :format => :json

    expect(response.status).to eq 200
    expect(response.header['Content-Type']).to include 'application/json'

    response_body = JSON.parse(response.body)

    expect(response_body['name']).to eq artist
    expect(response_body['top_tracks']['US']).not_to be(nil)
  end

end
