require 'rails_helper'

describe TwilioController do

  it 'successfully sends a text' do
    phone_number = '3039950197'
    artist = 'Justin Bieber'
    track = 'Track Name'

    get :text_track, params: {phoneNumber: phone_number, artist: artist, track: track}, :format => :json

    expect(response.status).to eq 204
    expect(response.body).to eq ''
  end

end
