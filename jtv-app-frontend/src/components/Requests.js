import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getRequests, destroyRequest, putRequest } from '../services/requests_api_helper';


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
        this.renderTableHeader();
    }

    deleteRequests = async (id) => {
        await destroyRequest(id);
        this.listRequests();
    }

    updateRequest = async (e, id, requestData) => {
        e.preventDefault();
        const updatedPost = await putRequest(id, requestData);
        const posts = this.state.posts;
        const newPosts = posts.map(post => post.id === parseInt(id) ? updatedPost : post);
        this.setState({
            posts: newPosts
        })
        this.props.history.push('/posts');
    }

    componentDidMount() {
        this.listRequests();
    }


    renderTableHeader() {
        let header = ['First Name','Last Name','Email','C.Year', 'C.Make','C.Model','Msg','Req Status','Req Type','Work Type','Updated At', 'Action 1','Action 2']
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    renderTableData() {
        return this.state.requests.map((item, index) => {
            return (
                <tr key={index}>
                        <td>{item.request_Fname}</td>
                        <td>{item.request_Lname}</td>
                        <td>{item.request_email}</td>
                        <td>{item.request_car_year}</td>
                        <td>{item.request_car_make}</td>
                        <td>{item.request_car_model}</td>
                        <td>{item.request_msg}</td>
                        <td>{item.requestStatusId}</td>
                        <td>{item.requestTypeId}</td>
                        <td>{item.workTypeId}</td>
                        <td>{item.updatedAt}</td>
                        <td><button>Update</button></td>
                        <td><button onClick={() => this.deleteRequests(item.id)}>Delete</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <h1 id='title'>Incoming Requests</h1>
            <table id='requests'>
               <tbody>
               <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            </div>
        )
    }
}

export default withRouter(Requests)