// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import searchYouTube from './lib/searchYouTube.js';

ReactDOM.render(
  //window.YOUTUBE_API_KEY, and window.searchYouTube does not work...
  <App searchYouTube={searchYouTube} API_KEY={YOUTUBE_API_KEY} />,
  document.getElementById('app')
);