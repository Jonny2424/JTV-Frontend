import React, { Component } from 'react';
import { getRequests } from '../services/requests_api_helper';

export default class Requests extends Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: []
        }
    }

    listRequests = async () => {
        console.log("IM HERE")
        const currentList = await getRequests();
        this.setState({ requests: currentList.data })
    }

    componentDidMount() {
        this.listRequests();
    }

    render() {
        console.log(this.state.requests)
        return (
            <div>
                <h1>Current Requests</h1>
                {this.state.requests.map((item, idx) => {
                    return <div key={idx}>
                        {item.request_Fname} 
                        {item.request_Lname} 
                        {item.requestStatusId} 
                        {item.requestTypeId} 
                        {item.request_car_make} 
                        {item.request_car_model} 
                        {item.request_car_year} 
                        {item.request_email} 
                        {item.request_msg} 
                        {item.updatedAt} 
                        {item.workTypeId}
                    </div>
                })
                }
            </div>
        )
    }
}
