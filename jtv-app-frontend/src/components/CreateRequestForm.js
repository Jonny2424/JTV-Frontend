import React, { Component } from 'react';

class CreateRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      img: "",
      body: "",
      city: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.createPost(e, this.state)}>
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
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <input type="submit" value="Post a Post" />
      </form>
    )
  }
}

export default CreateRequestForm;