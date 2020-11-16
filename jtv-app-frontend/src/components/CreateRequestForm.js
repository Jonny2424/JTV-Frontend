import React, { Component } from 'react';
import { Formik, Form, Field } from "formik";
import { Card, CardContent, TextField, MenuItem, Grid, Button } from '@material-ui/core';
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
      <div>
          <Formik initialValues={this.state} onSubmit={() => { }}>
            {({ values }) => (
              <Form>
                <Grid container xs="12" spacing="2">
                  <Grid item>
                    <Field name="request_Fname" as={TextField} variant="outlined" label="First Name" />
                  </Grid>
                  <Grid item>
                    <Field name="request_Lname" as={TextField} variant="outlined" label="Last Name" />
                  </Grid>
                  <Grid item>
                    <Field name="request_email" as={TextField} variant="outlined" label="Email" />
                  </Grid>
                  <Grid item>
                    <Field name="request_msg" as={TextField} variant="outlined" label="Message" multiline rows={1} rowsMax={8} />
                  </Grid>
                </Grid>
                <Grid container xs="12" spacing="2">
                  <Grid item>
                    <label>
                      <Field type="radio" name="requestTypeId" value="1" />
                      {"   " + "Request Info"}
                    </label>
                  </Grid>
                  <Grid item>
                    <label>
                      <Field type="radio" name="requestTypeId" value="2" />
                      {"   " + "Schedule a Detail"}
                    </label>
                  </Grid>
                  <Grid item>
                    <label>
                      <Field type="checkbox" name="notARobot" />
                      {" Not a robot?"}
                    </label>
                  </Grid>
                  {values.requestTypeId === "2" ?
                    <>
                      <Grid container xs="12" spacing="2" margin-bottom="9">
                        <Grid item>
                          <Field name="request_car_year" type="number" as={TextField} variant="outlined" label="Car Year" />
                        </Grid>
                        <Grid item>
                          <Field name="request_car_make" as={TextField} variant="outlined" label="Car Make" />
                        </Grid>
                        <Grid item>
                          <Field name="request_car_model" as={TextField} variant="outlined" label="Car Model" />
                        </Grid>
                        <Grid item>
                          <Field
                            as={TextField}
                            label="Preferred Drop Off"
                            name="request_date"
                            type="date"
                            variant="outlined"
                            defaultValue="mm/dd/yyyy"
                            InputLabelProps={{
                              shrink: true,
                            }} />
                        </Grid>
                        <Grid item>
                          <Field name="workTypeId" as={TextField} variant="outlined" label="Package" select style={{ "width": "8vw" }}>
                            <MenuItem defaultValue>Select One</MenuItem>
                            <MenuItem value={1}>Bronze</MenuItem>
                            <MenuItem value={2}>Silver</MenuItem>
                            <MenuItem value={3}>Gold</MenuItem>
                          </Field>
                        </Grid>
                      </Grid>
                    </>
                    : null}
                    <Grid container xs="12" spacing="2" style={{ "marginTop": 10 }}>
                      <Grid item >
                    <Button type="submit" variant="outlined" color="success">
                  Submit!
                </Button>
                    </Grid>
                    
                </Grid>
                </Grid>
                {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
              </Form>
            )}
          </Formik>
          </div>
    )
  }
}

export default CreateRequestForm;