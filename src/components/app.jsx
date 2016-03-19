import React, { Component }  from "react";
import SearchBar from "./search-bar";
import YTSearch from "youtube-api-search";
import VideoList from "./video-list.jsx";
import VideoDetail from "./video-details.jsx";

const API_KEY = "AIzaSyA7TK1rNzqw4vGnyjoVWwHqFoX3E2lvkeQ";

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key:API_KEY, term: "surfboards"}, videos => {
			console.log(videos);
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});

	}
	render() {
		return (
			<div>
				<div>
					Type here: <SearchBar />
				</div>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => {this.setState({selectedVideo});}}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}
