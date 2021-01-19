class Twitter {
  constructor({ listElem }) {
    this.tweets = new Posts();
    this.elements = {
      listElem: document.querySelector(listElem),
    };
  }

  renderPosts() {}

  showPosts() {}

  showLikePosts() {}

  showAllPost() {}

  openModal() {}
}

class Posts {
  constructor({ posts = [] } = {}) {
    this.posts = posts;
  }

  addPost(tweet) {
    const post = new Post(tweet);
    this.posts.push(post);
  }

  deletePosts(id) {}

  likePost(id) {}
}

class Post {
  constructor() {
    this.userName = param.userName;
    this.nickName = param.nickName;
    this.data = param.data;
    this.test = param.test;
    this.img = param.img;
    this.likes = param.likes;
    this.like = false;
  }

  changeLike() {
    this.like = !this.like;
    if (this.like) {
      this.likes++;
    } else {
      this.like--;
    }
  }
}

const twitter = new Twitter({
  listElem: ".tweet-list",
});

console.log("twitter:", twitter);
