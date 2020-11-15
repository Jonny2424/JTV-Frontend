import React, { Component } from 'react';

class UpdateRequestFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
        requestStatusId: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    const requestToEdit = this.props.requests.find(request =>
                request.id === parseInt(this.props.requestId)
              );
    this.setState({
        requestStatusId: requestToEdit.requestStatusId
    })
  }

  render() {
    return (
      <form
        onSubmit={(e) => this.props.updateRequest(e, this.props.requestId, this.state)}
      >
        <input
          type="text"
          name="requestStatusId"
          value={this.state.requestStatusId}
          onChange={this.handleChange}
        />
        <input type="submit" value="Update Request" />
      </form>
    )
  }
}

export default UpdateRequestFrom;