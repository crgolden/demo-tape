require 'twilio-ruby'

class TwilioController < ApplicationController
  def text_track
    twilio_account_sid = MyApp::Application.secrets['twilio_account_sid']
    twilio_auth_token = MyApp::Application.secrets['twilio_auth_token']
    app_phone_number = "+#{MyApp::Application.secrets['app_phone_number']}"
    body = "#{params['artist']}'s top track: #{params['track']}"
    client = Twilio::REST::Client.new twilio_account_sid, twilio_auth_token
    message = {
        :from => app_phone_number,
        :to => params['phoneNumber'],
        :body => body
    }

    client.api.account.messages.create(message)
  end
end
