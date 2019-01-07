import React from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

class PostsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], filter: '' };
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleRemovePost = this.handleRemovePost.bind(this);
    this.removePost = this.removePost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.refreshPosts = this.refreshPosts.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.getByID = this.getByID.bind(this);
    this.handleChange = this.handleChange.bind(this);
    if (process.env.NODE_ENV === 'test') return;
    this.fetchPosts();
  }

  getByID() {
    const { filter } = this.state;
    api.posts.get(filter)
      .then(res => (res ? this.setState({ posts: [res] }) : ''))
      .catch(error => window.console.log(error));
  }

  fetchPosts() {
    api.posts.getAll()
      .then(res => this.setState({ posts: res }))
      .catch(error => window.console.log(error));
  }

  handleEditPost(event, id) {
    event.preventDefault();
    const { sendToEdit } = this.props;
    const { posts } = this.state;
    sendToEdit(posts.find(p => p.id === id));
  }

  handleRemovePost(event, id) {
    event.preventDefault();
    api.posts.destroy(id)
      .then(res => this.removePost(res))
      .catch(error => window.console.log(error));
  }

  removePost(id) {
    const { posts } = this.state;
    this.setState({
      posts: posts.filter(post => post.id !== id),
    });
  }

  addPost(post) {
    const { posts } = this.state;
    this.setState({
      posts: [post, ...posts],
    });
  }

  refreshPosts() {
    const { posts } = this.state;
    this.setState({ posts });
  }

  handleChange(event) {
    const vm = this;
    const targetValue = event.target.value;
    this.setState({ filter: event.target.value }, () => {
      targetValue ? vm.getByID() : vm.fetchPosts();
    });
  }

  render() {
    const { posts, filter } = this.state;
    const listItems = posts.map(item => (
      <tr key={item.id}>
        <th scope="row">
          {item.id}
        </th>
        <td>
          {item.title}
        </td>
        <td>
          {item.author}
        </td>
        <td>
          {item.content}
        </td>
        <td>
          <div className="btn-group" role="group" aria-label="">
            <button type="button" className="btn btn-warning" onClick={e => this.handleEditPost(e, item.id)}>
              Edit
            </button>
            <button type="button" className="btn btn-danger" onClick={e => this.handleRemovePost(e, item.id)}>
              Remove
            </button>
          </div>
        </td>
      </tr>
    ));
    return (
      <div className="card">
        <div className="card-body">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Filter
              </span>
            </div>
            <input type="text" className="form-control" placeholder="ID" aria-label="ID" value={filter} onChange={this.handleChange} />
          </div>

          <table className="table table-hover table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">
                  #
                </th>
                <th scope="col">
                  Title
                </th>
                <th scope="col">
                  Author
                </th>
                <th scope="col">
                  Content
                </th>
                <th scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {listItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

PostsTable.propTypes = {
  sendToEdit: PropTypes.func.isRequired,
};

export default PostsTable;
