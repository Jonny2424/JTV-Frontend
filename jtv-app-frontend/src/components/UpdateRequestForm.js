import React, { Component } from 'react';

class UpdateRequestFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      img: "",
      body: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    const postToEdit = this.props.posts.find(post =>
                post.id === parseInt(this.props.postId)
              );
    this.setState({
      title: postToEdit.title,
      img: postToEdit.img,
      body: postToEdit.body
    })
  }

  render() {
    return (
      <form
        onSubmit={(e) => this.props.updatePost(e, this.props.postId, this.state)}
      >
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="img"
          value={this.state.img}
          onChange={this.handleChange}
        />
        <input
          type="textarea"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <input type="submit" value="Update a Post" />
      </form>
    )
  }
}

export default UpdateRequestFrom;