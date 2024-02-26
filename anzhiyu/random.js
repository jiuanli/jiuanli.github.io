var posts=["2024/02/26/hello-world/","2024/02/26/page/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };