import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className="proj-container proj-post-show">
        <Link to="/" className="btn btn-info">Back To Index</Link>
        <button
          type="button"
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h5>Categories: {post.categories}</h5>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);
