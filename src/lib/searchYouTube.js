var searchYouTube = ({key, query, max}, callback) => {
  console.log('searchYouTube is invoked');
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })//method chaining usind dot-notation
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
  });
};


//window.searchYouTube = searchYouTube;

export default searchYouTube;