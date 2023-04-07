import React from 'react'
import '../../App.css';




function Feed(data) {
  let feedFormatted = data.posts.map((post) => {
    return (
      <div  className="">
        <h2>
          <a className="" href={`/places/${post.id}`}>
            {post.title} 
          </a>
        </h2>
        <p>
          {post.name}
        </p>
        <img className="" src={post.pic} alt={post.name} /> 
        <div>
          {post.body}
        </div>
      </div>       
    )
  })

    return (
      <div>
        
          {feedFormatted}
        
      </div>
    );
}

export default Feed;