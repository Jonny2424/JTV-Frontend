import React from 'react'
import { Link } from 'react-router-dom';

export default function RequestList(props) {

    function renderTableHeader() {
        let header = ['First Name','Last Name','Email','C.Year', 'C.Make','C.Model','Msg','Req Date','Req Status','Req Type','Work Type','Created At','Updated At', 'Update Status','Delete']
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    function renderTableData() {
        return props.requests.map((item, index) => {
            return (
                <tr key={index}>
                        <td>{item.request_Fname}</td>
                        <td>{item.request_Lname}</td>
                        <td>{item.request_email}</td>
                        <td>{item.request_car_year}</td>
                        <td>{item.request_car_make}</td>
                        <td>{item.request_car_model}</td>
                        <td>{item.request_msg}</td>
                        <td>{item.request_date}</td>
                        <td>{item.requestStatusId}</td>
                        <td>{item.requestTypeId}</td>
                        <td>{item.workTypeId}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
                        <td><Link to={`/requests/${item.id}/update`}><button>Update</button></Link></td>
                        <td><button onClick={() => this.deleteRequests(item.id)}>Delete</button></td>
                </tr>
            )
        })
    }

    
    return (
        <div>
                <h1 id='title'>Incoming Requests</h1>
            <table id='requests'>
               <tbody>
               <tr>{renderTableHeader()}</tr>
                  {renderTableData()}
               </tbody>
            </table>
            </div>
    )
}
