import React, { Component } from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import { getRequests, destroyRequest, putRequest } from '../services/requests_api_helper';
import RequestList from './RequestList';
import UpdateRequestForm from './UpdateRequestForm';


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
        console.log(id)
        console.log(requestData)
        e.preventDefault();
        const updatedRequest = await putRequest(id, requestData);
        const requests = this.state.requests;
        const newRequests = requests.map(request => request.id === parseInt(id) ? updatedRequest : request);
        this.setState({
            requests: newRequests
        })
        this.props.history.push('/requests');
    }

    componentDidMount() {
        this.listRequests();
    }

    render() {
        return (
            <div>
                <Route exact path="/requests" render={() => (
                    <RequestList requests={this.state.requests} />
                )} />
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