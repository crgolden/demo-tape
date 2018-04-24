Rails.application.routes.draw do
  root :to => 'hello_world#index'
  get '/spotify' => 'spotify#get_artist'
  get '/twilio' => 'twilio#text_track'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
