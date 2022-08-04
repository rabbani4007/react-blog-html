import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/13010671/pexels-photo-13010671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quaerat
        nisi facilis fuga, odio quae molestiae iste magni. Voluptatibus
        perspiciatis aliquam rem ipsa explicabo dolores tenetur dignissimos
        voluptatem natus numquam! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Natus quaerat nisi facilis fuga, odio quae molestiae
        iste magni. Voluptatibus perspiciatis aliquam rem ipsa explicabo dolores
        tenetur dignissimos voluptatem natus numquam! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Natus quaerat nisi facilis fuga, odio
        quae molestiae iste magni. Voluptatibus perspiciatis aliquam rem ipsa
        explicabo dolores tenetur dignissimos voluptatem natus numquam!
      </p>
    </div>
  );
}

export default Post;
