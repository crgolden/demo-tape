import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {
      name: this.props.name,
      phoneNumber: '',
      artist: '',
      artistObject: {},
      topTrack: null,
      isError: false,
      error: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valid = this.valid.bind(this);
    this.getTopTrack = this.getTopTrack.bind(this);
    this.textTrack = this.textTrack.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getTopTrack(this.state.artist)
      .then(
        (response) => {
          this.textTrack(response)
        },
        (error) => {
          this.setState({
            isError: true,
            error: error
          });
          console.log(error);
        });
  }

  valid() {
    return this.state.phoneNumber && this.state.artist;
  }

  getTopTrack(artist) {
    return fetch(`/spotify?artist=${artist}`)
      .then(
        response => response.json(),
        error => {
          this.setState({
            isError: true,
            error: error
          });
          console.log(error);
        });
  }

  textTrack(artist) {
    let topTrack = artist.top_tracks.US[0];

    return fetch(`/twilio?phoneNumber=${this.state.phoneNumber}&artist=${artist.name}&track=${topTrack.name}`)
      .then(
        response => {
          this.setState({
            artist: artist.name,
            artistObject: artist,
            topTrack: topTrack,
          });
        },
        error => {
          this.setState({
            isError: true,
            error: error
          });
          console.log(error);
        });
  }

  render() {
    return (
      <form
        id="enter-info"
        onSubmit={this.handleSubmit}>
        <p className="title">
          Going Platinum
        </p>
        <div>
          <label htmlFor="phoneNumber">
            Phone number:
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={this.state.phoneNumber}
            onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor="artist">
            Artist Name:
          </label>
          <input
            id="artist"
            name="artist"
            type="text"
            value={this.state.artist}
            onChange={this.handleChange}/>
        </div>
        <br/>
        <p>
          <input
            type="submit"
            name="submit"
            disabled={!this.valid()}
            value="Submit"/>
        </p>
        {this.state.topTrack && !this.state.error &&
        <div>
          <div className="success">
            <br/>
            Success!
          </div>
          <div className="message">
            <br/>
            {this.state.artistObject.name}'s top track has been texted to {this.state.phoneNumber}.
            <br/>
            <br/>
            <img src={this.state.artistObject.images[0].url} height="100" width="100"/>
            <br/>
            Artist: {this.state.artistObject.name}
            <br/>
            Followers: {new Intl.NumberFormat().format(this.state.artistObject.followers.total)}
            <br/>
            <a href={this.state.artistObject.external_urls.spotify}>View on Spotify</a>
          </div>
        </div>}
        {this.state.isError &&
        <div className="message">
          <br/>
          Oops! Something went wrong.
          <br/>
          We're working to fix it - please try again later.
        </div>}
      </form>
    );
  }
}
