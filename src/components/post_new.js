import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error} } = field;
    const newClassName = `form-group ${touched&&error ? "has-danger" : ""}`;
    return (
      <div className={newClassName}>
        <label>{field.label}</label>
        <div>
          <input className="form-inside" type="text" {...field.input} />
        </div>
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Title For Post" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Post Content" name="content" className="content" component={this.renderField} />
        <div className="btn-new">
          <button type="submit" className="btn btn-info newPostBtn">Submit</button>
          <Link to="/" className="btn btn-danger newPostBtn">Cancel</Link>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) errors.title = 'Enter a title!';
  if (!values.categories) errors.categories = 'Enter some categroies';
  if (!values.content) errors.content = 'Enter some content';

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
