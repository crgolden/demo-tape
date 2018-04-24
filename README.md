# ➿ Demo Tape

## Want to go platinum? Here's how you start.

PromptWorks, like any proper record label, is rather discerning of the artists
we sign. We heard you have a long list of cuts, but we need to hear some fresh
tracks before we bring you into the studio for a sesh. We're looking for a
certain sound: out-of-the-ordinary but not too renegade.

If your code is catchy, your tests show talent, and your refactoring is ready
for the big time, maybe we can talk about a deal. Rockstars, this is the wrong
record company for you.

Thanks in advance for your tape!

  1. Use this repo.

  2. If you want to start with the Ruby, Python 3, or Node.js projects that are
     in the `/starter/ruby/` and `/starter/python3/` and `/starter/nodejs/`
     directories, copy their contents to this repo's root directory.  If you
     want to use a different language or start from scratch, that's fine too.
     Delete the `starter/` directory.

  3. Try your hand at the following exercise.

    This Ruby/Python 3 script sends an SMS message containing the most popular
    track of an artist on Spotify.  There's a stub program in `/bin/demo-tape`.

    Below is a list features for you to implement, including in-browser
    features which will require software to handle HTTP requests, perhaps using
    a web framework like Rails, Sinatra, Flask, Express, etc.

    As you add the following features, please use or replace the current
    implementation and test suite, adding new tests as you see fit and making
    commits with informative messages.

      1. Browser users should specify a artist and their phone number, then
         click a button to have the top track sent to them.

      2. Browser users should see a success message after they have clicked a
         button and successfully requested an SMS be sent _without the page
         reloading_.

      3. Implement a feature or improvement of your choosing. You're free to
         grab something from the icebox (see below) or devise another.

    The feature set of this app is minimal so that you can focus on aspects
    that you consider important for a robust production app built in
    collaboration with other developers.

  4. Deploy your app so that it is available via the internet.
     [Heroku](https://www.heroku.com) offers a free, easy to use platform for
     such things.

  5. Submit a pull request with:

      - a link to your deployed web app
      - your thoughts about the exercise
      - about how long you spent on it
      - aspects of the application you would implement or improve given more
        time

## Things we are looking for

- your best work, so use a language you are very comfortable with
- clean code
- TDD
- good architecture
- a robust, production-ready app
- an app ready for collaboration with other developers

## Notes

There are some Spotify and Twilio credentials committed in the code that are
attached to an account with some credits.  Feel free to use those credentials
for this assignment.

## Icebox

- Display artist info in the browser. Give it a cool layout.
- Embed the [play
  widget](https://developer.spotify.com/technologies/widgets/spotify-play-button/)
  and update it live as the user searches for different artists.
- Display links to album reviews in the single page app
- Popularity Trends. Which related group is most popular or increasing in
  popularity the quickest?
- Integration with TicketLeap. Does the artist have any upcoming concerts in
  the area?
