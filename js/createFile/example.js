var videos = [
  {
    link:"/watch?v=YlUKcNNmywk",
    title:"Red Hot Chili Peppers - Californication [Official Music Video]",
    views:"1,286,283",
    date:"Oct 26, 2009"
  },

  {
    link:"/watch?v=SBjQ9tuuTJQ",
    title:"Foo Fighters - The Pretender",
    views:"752,533",
    date:"Oct 2, 2009"
  }
];

download(JSON.stringify(videos), 'videos.json', 'text/json');

$.getJSON('videos.json',function(obj){
  $.each(obj,function(k,v){
    console.log(v.title);
    console.log(v.date);
    console.log(v.views);
  });
});

