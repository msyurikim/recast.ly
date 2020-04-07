// var searchYouTube = (options, callback) => {
//   // TODO
//   // options = {key:youtube_api_key, max:5, querry:input}
//   $.ajax({
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     data: {
//       key: options.key;
//       part: 'snippet',
//       maxResults: options.max,
//       query: options.query,
//       videoEmbeddable: true,
//       type: 'video'
//     },
//     success: function(data) {
//       callback(data);
//     },
//     error: function(){
//       console.log('Request Failed');
//     }
//   });


// };

var searchYouTube = ({key, query, max = 5}, callback) {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })  //method chaining usind dot-notation
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};


window.searchYouTube = searchYouTube;

// export default searchYouTube;