import React, { Component } from 'react';
import { Formik, Form, Field } from "formik";
import { Card, CardContent, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import * as Yup from "yup";

class CreateRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      request_Fname: '',
      request_Lname: '',
      request_email: '',
      request_car_year: null,
      request_car_make: '',
      request_car_model: '',
      request_msg: '',
      request_date: null,
      requestTypeId: null,
      workTypeId: null,
      notARobot: false,

    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Formik initialValues={this.state} onSubmit={() => { }}>
            {({ values }) => (
              <Form>
                <Field name="request_Fname" as={TextField} label="First Name" />
                <Field name="request_Lname" as={TextField} label="Last Name" />
                <Field name="request_email" as={TextField} label="Email" />
                <Field name="request_car_year" type="number" as={TextField} label="Car Year" />
                <Field name="request_car_make" as={TextField} label="Car Make" />
                <Field name="request_car_model" as={TextField} label="Car Model" />
                <Field name="request_msg" as={TextField} label="Message" multiline rows={5} />
                <label>
                  <Field type="radio" name="requestTypeId" value="1" />
              Request Info
            </label>
                <label>
                  <Field type="radio" name="requestTypeId" value="2" />
              Schedule a Detail
            </label>
                {values.requestTypeId === "2" ? <TextField
                  id="date"
                  label="Preferred Dropoff"
                  type="date"
                  defaultValue="mm/dd/yyyy"
                  InputLabelProps={{
                    shrink: true,
                  }}
                /> : null}
                <Field name="workTypeId" as="select">
                  <option defaultValue>Select One</option>
                  <option value={1}>Bronze</option>
                  <option value={2}>Silver</option>
                  <option value={3}>Gold</option>
                </Field>
                <Field type="checkbox" name="notARobot" />
                

                <pre>{JSON.stringify(values, null, 4)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    )
  }
}

export default CreateRequestForm;