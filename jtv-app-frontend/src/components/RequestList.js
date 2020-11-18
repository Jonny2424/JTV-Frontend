import React from 'react'
import { Link } from 'react-router-dom';

export default function RequestList(props) {
//Used a table to list the requests. Header could be cleaner using a map
//function but ohwell...
//Links and buttons were able to be nested in the tables as well.
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
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.car_year}</td>
                        <td>{item.car_make}</td>
                        <td>{item.car_model}</td>
                        <td>{item.msg}</td>
                        <td>{item.date}</td>
                        <td>{item.status_id}</td>
                        <td>{item.type_id}</td>
                        <td>{item.work_type_id}</td>
                        <td>{item.createdAt}</td>
                        <td>{item.updatedAt}</td>
                        <td><Link to={`/requests/${item.id}/update`}><button>Update</button></Link></td>
                        <td><button onClick={() => props.deleteRequests(item.id)}>Delete</button></td>
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
