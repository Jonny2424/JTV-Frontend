import React from 'react';
import Header from './Header';
import CreateRequestForm from '../CreateRequestForm';
import { postRequest } from '../../services/requests_api_helper';

export default function ContactUs() {

    // const createRequest = async (e, requestData) => {
    //     e.preventDefault();
    //     const newRequest = await postRequest(requestData);
    //     return newRequest
    // }

    return (
        <>
            <Header />
            <CreateRequestForm  />
        </>
    )
}
