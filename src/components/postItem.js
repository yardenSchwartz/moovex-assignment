import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addLike, removeLike, deletePost } from '../../actions/post';

export const PostItem = ({ post: { userId, id, title, body } }) => (
  <div className='post bg-white p-1 my-1'>
    {/* <div>
      <Link to={`/profile/${user}`}>
        <img className='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div> */}
    <div>
      {/* <p className='my-1'>{text}</p> */}
      <p className='user-id'>UserId is: {userId}</p>
      <p className='id'>id is: {id}</p>
      <p className='title-text'>Title is: {title}</p>
      <p className='body-text'>Body: {body}</p>
    </div>
  </div>
);

// PostItem.defaultProps = {
//   showActions: true,
// };

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  // removeLike: PropTypes.func.isRequired,
  // deletePost: PropTypes.func.isRequired,
};

export default PostItem;

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
//   PostItem
// );
