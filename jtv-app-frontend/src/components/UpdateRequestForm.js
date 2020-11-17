import React, { Component } from 'react';

class UpdateRequestFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
        requestStatusId: '',
        request_date: ''
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
        requestStatusId: requestToEdit.requestStatusId,
        request_date: requestToEdit.request_date
    })
  }

  render() {
    return (
      
      <form
        onSubmit={(e) => this.props.updateRequest(e, this.props.requestId, this.state)}
      >
        <div className="updateRequestForm">
        <label>
         {"Adjust date for work request: "}
        <input
          type="text"
          name="request_date"
          value={this.state.request_date}
          onChange={this.handleChange}
        />
        </label>
        <label>
         {"Change Status Id: "}
        <input
          type="text"
          name="requestStatusId"
          value={this.state.requestStatusId}
          onChange={this.handleChange}
        />
        </label>
        <input type="submit" value="Update Request" />
        </div>
      </form>
      
    )
  }
}

export default UpdateRequestFrom;