import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidMount(){
    this.getLiveVideos('tigers');
  }

  getLiveVideos(query) {
    console.log('getLiveVideos invoked', this.props.API_KEY);
    var optionsObj = {
      key: this.props.API_KEY,  //does this work?
      query: query,
      max: 5
    };
    this.props.searchYouTube(optionsObj, (videos)=> {
      this.setState({videos: videos, currentVideo: videos[0]});
    });
  }

  onVideoTitleClick(video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search getLiveVideos={this.getLiveVideos.bind(this)} />
            {/* <div><h5><em>search</em> view goes here</h5></div> */}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onVideoTitleClick={this.onVideoTitleClick.bind(this)}/>
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
