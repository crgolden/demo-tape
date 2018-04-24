require 'rspotify'

class SpotifyController < ApplicationController
  def get_artist
    spotify_client_id = MyApp::Application.secrets['spotify_client_id']
    spotify_client_secret = MyApp::Application.secrets['spotify_client_secret']

    RSpotify::authenticate(spotify_client_id, spotify_client_secret)
    artist = RSpotify::Artist.search(params['artist']).first

    # Get the top tracks, otherwise empty object in browser
    track = artist.top_tracks(:US).first

    render :json => artist.as_json
  end
end
