import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addLike, removeLike, deletePost } from '../../actions/post';

export const Card = ({ post: { userId, id, title, body } }) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      {/* <p className='my-1'>{text}</p> */}
      {/* <p className='user-id'>UserId is: {userId}</p> */}
      {/* <p className='id'>id is: {id}</p> */}
      <h4 className='title-text'>{title}</h4>
      <p className='body-text'>{body}</p>
    </div>
  </div>
);

// PostItem.defaultProps = {
//   showActions: true,
// };

Card.propTypes = {
  post: PropTypes.object.isRequired,
  // removeLike: PropTypes.func.isRequired,
  // deletePost: PropTypes.func.isRequired,
};

export default Card;

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
//   PostItem
// );
