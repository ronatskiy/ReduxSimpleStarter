import _ from "lodash";
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

		this.videoSearch("surfboards");
	}

	videoSearch(term){
		YTSearch({key:API_KEY, term: term}, videos => {			
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce(term => { this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onSearchVideoTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => {this.setState({selectedVideo});}}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}
