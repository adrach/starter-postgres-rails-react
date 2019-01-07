import React from 'react';
import PostsAdd from './PostsAdd';
import PostsTable from './PostsTable';

export default class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sendToEdit = this.sendToEdit.bind(this);
    this.addPost = this.addPost.bind(this);
    this.refreshPosts = this.refreshPosts.bind(this);
    this.postAddForm = React.createRef();
    this.postTable = React.createRef();
  }

  sendToEdit(post) {
    this.postAddForm.current.updateAction(post);
  }

  addPost(post) {
    this.postTable.current.addPost(post);
  }

  refreshPosts(post) {
    this.postTable.current.refreshPosts(post);
  }

  render() {
    return (
      <div className="col">
        <PostsAdd ref={this.postAddForm} addPost={this.addPost} refreshPosts={this.refreshPosts} />
        <PostsTable sendToEdit={this.sendToEdit} ref={this.postTable} />
      </div>
    );
  }
}
