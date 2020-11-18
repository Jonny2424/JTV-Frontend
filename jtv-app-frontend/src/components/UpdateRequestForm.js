import React, { Component } from 'react';
//Form used for admin to change requests dates and the status of the request
class UpdateRequestFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
        status_id: '',
        date: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    // finds the two porperties being edited and updates their states for the form
    const requestToEdit = this.props.requests.find(request =>
                request.id === parseInt(this.props.requestId)
              );
    this.setState({
        status_id: requestToEdit.status_id,
        date: requestToEdit.date
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
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        </label>
        <label>
         {"Change Status Id: "}
        <input
          type="text"
          name="status_id"
          value={this.state.status_id}
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