import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { getRequests, destroyRequest, putRequest } from '../services/requests_api_helper';
import RequestList from './RequestList';
import UpdateRequestForm from './UpdateRequestForm';
import { CSVLink } from "react-csv";


class Requests extends Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: []
        }
    }

    listRequests = async () => {
        const currentList = await getRequests();
        this.setState({ requests: currentList.data })
    }

    deleteRequests = async (id) => {
        await destroyRequest(id);
        this.listRequests();
    }

    updateRequest = async (e, id, requestData) => {
        e.preventDefault();
        const updatedRequest = await putRequest(id, requestData);
        this.listRequests();
        this.props.history.push('/requests');
    }


    componentDidMount() {
        this.listRequests();
    }

    render() {
        return (
            <div>
                <Route exact path="/requests" render={() => (
                    <RequestList requests={this.state.requests} deleteRequests={this.deleteRequests} />
                )} />
                {/* Very handy code to allow admin to download the table to a CSV file */}
                <CSVLink
                    filename={"RequestList.csv"}
                    color="primary"
                    style={{ float: "right", marginTop: "10px", marginRight: "5px" }}
                    className="btn btn-primary"
                    data={this.state.requests}>
                    Download CSV
                </CSVLink>
                <Route path="/requests/:id/update" render={(props) => (
                    <UpdateRequestForm
                        requests={this.state.requests}
                        updateRequest={this.updateRequest}
                        requestId={props.match.params.id}
                    />
                )} />
            </div>
        )
    }
}

export default withRouter(Requests)