import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";

// require("dotenv").config();


// process.env.API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    YTSearch({ key: API_KEY, term: "" }, (videos) => {
      this.setState({ videos });
    });

    this.state = { videos: [] };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
