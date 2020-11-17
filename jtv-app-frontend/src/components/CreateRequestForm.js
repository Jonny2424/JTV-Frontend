import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { postRequest } from '../services/requests_api_helper';
import { Formik, Form, Field } from "formik";
import { TextField, MenuItem, Grid, Button } from '@material-ui/core';


class CreateRequestForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      car_year: null,
      car_make: '',
      car_model: '',
      msg: '',
      date: '',
      type_id: null,
      work_type_id: 1
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  createRequest = async (requestData) => {
    postRequest(requestData);
    this.props.history.push('/')
  }


  render() {
    return (
      <div className="form-holder">
          <Formik initialValues={this.state} onSubmit={(values) => {
            console.log(values)
            this.createRequest(values)
          }}>
            {({ values }) => (
              <Form>
                <h1 style={{textAlign: "left"}}>Contact Form</h1>
                <Grid container xs="12" spacing="2">
                  <Grid item>
                    <Field name="fname" as={TextField} variant="outlined" label="First Name" />
                  </Grid>
                  <Grid item>
                    <Field name="lname" as={TextField} variant="outlined" label="Last Name" />
                  </Grid>
                  <Grid item>
                    <Field name="email" as={TextField} variant="outlined" label="Email" />
                  </Grid>
                  <Grid item>
                    <Field name="msg" as={TextField} variant="outlined" label="Message" multiline rows={1} rowsMax={8} />
                  </Grid>
                </Grid>
                <Grid container xs="12" spacing="2">
                  <Grid item>
                    <label>
                      <Field type="radio" name="type_id" value="1" />
                      {"   " + "Request Info"}
                    </label>
                  </Grid>
                  <Grid item>
                    <label>
                      <Field type="radio" name="type_id" value="2" />
                      {"   " + "Schedule a Detail"}
                    </label>
                  </Grid>
                  {values.type_id === "2" ?
                    <>
                      <Grid container xs="12" spacing="2" margin-bottom="9">
                        <Grid item>
                          <Field name="car_year" type="number" as={TextField} variant="outlined" label="Car Year" />
                        </Grid>
                        <Grid item>
                          <Field name="car_make" as={TextField} variant="outlined" label="Car Make" />
                        </Grid>
                        <Grid item>
                          <Field name="car_model" as={TextField} variant="outlined" label="Car Model" />
                        </Grid>
                        <Grid item>
                          <Field
                            as={TextField}
                            label="Preferred Drop Off"
                            name="date"
                            type="date"
                            variant="outlined"
                            defaultValue="mm/dd/yyyy"
                            InputLabelProps={{
                              shrink: true,
                            }} />
                        </Grid>
                        <Grid item>
                          <Field name="work_type_id" as={TextField} variant="outlined" label="Package" select style={{ "width": "8vw" }}>
                            <MenuItem defaultValue>Select One</MenuItem>
                            <MenuItem value={1}>Bronze</MenuItem>
                            <MenuItem value={2}>Silver</MenuItem>
                            <MenuItem value={3}>Gold</MenuItem>
                          </Field>
                        </Grid>
                      </Grid>
                    </>
                    : null}
                </Grid>
                {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
                <Button type="submit" variant="outlined" color="success" style={{ "marginTop": 50 }}>
                  Submit!
                </Button>
              </Form>
            )}
          </Formik>
          </div>
    )
  }
}

export default withRouter(CreateRequestForm);