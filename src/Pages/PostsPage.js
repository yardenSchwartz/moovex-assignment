import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { interceptor } from '../interceptor';

import Card from '../components/Card';
// import PostForm from './PostForm';
// import { getPosts } from '../components/postsAction';
// import axios from 'axios';
import axios from '../interceptor';
export default class Posts extends React.Component {
  // extends Component
  constructor() {
    super();
    this.state = {
      posts: [],
      savedPosts: [],
      otherPosts: [],
    };
  }

  //Get AllPosts
  async getPosts() {
    let savedPosts = [];
    let otherPosts = [];

    return await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({
          posts: response.data,
        });

        this.state.posts.map((post) => {
          if (post.userId == '1') {
            savedPosts.push(post);
          } else {
            otherPosts.push(post);
          }
        });

        this.setState({
          savedPosts: savedPosts,
          otherPosts: otherPosts,
        });
        // fetch(url, res);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getPosts();
    // this.getDividePosts();
  }

  render() {
    return (
      <Fragment>
        <h1 className='large text-primary'>Posts</h1>
        {/* <p className='lead'>
          <i className='fas fa-user' /> Welcome to the community
        </p> */}
        {/* <PostForm /> */}
        {/* <div className='posts'>
          {this.state.posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div> */}
        <div className='savedPosts'>
          <h3 className='large text-primary'>Saved Posts</h3>

          {this.state.savedPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
        <div className='otherPosts'>
          <h3 className='large text-primary'>Other Posts</h3>

          {this.state.otherPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}
//Get posts
// export const getPosts = () => async (dispatch) => {
//   try {
//     const res = await axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         console.log(response.data);
//         return response;
//       });
//     // return res;
//     //   dispatch({
//     //     type: GET_POSTS,
//     //     payload: res.data,
//     //   });
//   } catch (err) {
//     //   dispatch({
//     //     type: POST_ERROR,
//     //     payload: { msg: err.respone.statusText, status: err.respone.status },
//     //   });
//   }
// };

// const Posts = () => {
//   //   e.preventDefault();
//   const [posts, setPosts] = useState([]);

//   useEffect(async () => {
//     try {
//       let url = 'https://jsonplaceholder.typicode.com/posts';

//       const res = await axios.get(url);
//       console.log(res);

//       //   let posts1 = res.data;
//       const response = await getPosts().then((response) => {
//         return response;
//       });
//       console.log(response);
//       let ans = fetch(url, res);
//       console.log(ans);

//       setPosts(res.data);

//       //   console.log(posts1);
//       //   posts.map((post) => {
//       //     if (post.userId == '1') {
//       //       savedPosts.push(post);
//       //     } else {
//       //       otherPosts.push(post);
//       //     }
//       //   });
//     } catch (err) {
//       console.log(err);
//     }
//   }, []);

//   return (
//     <Fragment>
//       <h1 className='large text-primary'>Posts</h1>
//       {/* <p className='lead'>
//         <i className='fas fa-user' /> Welcome to the community
//       </p> */}
//       {/* <PostForm /> */}
//       <div className='posts'>
//         {posts.map((post) => (
//           <PostItem key={post.id} post={post} />
//         ))}
//       </div>
//       {/* <div className='savedPosts'>
//         <h3 className='large text-primary'>Saved Posts</h3>

//         {savedPosts.map((post) => (
//           <PostItem key={post.id} post={post} />
//         ))}
//       </div>
//       <div className='otherPosts'>
//         <h3 className='large text-primary'>Other Posts</h3>

//         {otherPosts.map((post) => (
//           <PostItem key={post.id} post={post} />
//         ))}
//       </div> */}
//     </Fragment>
//   );
// };

// const Posts = async (e) => {
//   const postsArray = await getPosts();
//   console.log(postsArray);
//   return (
//     <Fragment>
//       <h1 className='large text-primary'>Posts</h1>
//       <p className='lead'>
//         <i className='fas fa-user' /> Welcome to the community
//       </p>
//       {/* <PostForm /> */}
//       {/* <div className='posts'>
//         {postsArray.map((post) => (
//           <p key={post.id} post={post} />
//           //   <PostItem key={post.id} post={post} />
//         ))}
//       </div> */}
//     </Fragment>
//   );
// };

// const Posts = ({ getPosts, post: { posts, loading } }) => {
//   useEffect(() => {
//     getPosts();
//   }, [getPosts]);
//     console.log(getPosts);
//   return <div />;
// return (
//   <Fragment>
//     <h1 className='large text-primary'>Posts</h1>
//     <p className='lead'>
//       <i className='fas fa-user' /> Welcome to the community
//     </p>
//     {/* <PostForm /> */}
//     <div className='posts'>
//       {/* {posts.map((post) => (
//         <PostItem key={post.id} post={post} />
//       ))} */}
//     </div>
//   </Fragment>
// );
// };

// Posts.propTypes = {
//   getPosts: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   post: state.post,
// });

// export default connect(mapStateToProps, { getPosts })(Posts);
// export default Posts;
