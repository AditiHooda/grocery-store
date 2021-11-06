import React, { Component } from "react";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            tel: '',
            email: '',
            message: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return (
            <div className='container'>
                <div className='row row-content'>
                    <div className='col-12 my-4 text-center'>
                        <h1><span className='text-success'>CONTACT</span> US </h1>
                    </div>
                    <div className='col-12 col-md-9 offset-md-2'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2} className='col-form-label'>
                                    Name
                                </Label>
                                <Col md={5}>
                                    <Input type='text' id='firstname' name='firstname'
                                        placeholder='First Name'
                                        value={this.state.firstname}
                                        onChange={this.handleInput} />
                                </Col>
                                <Col md={5}>
                                    <Input type='text' id='lastname' name='lastname'
                                        placeholder='Last Name'
                                        value={this.state.lastname}
                                        onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={2}>
                                    <Input type="tel" class="form-control" id="areacode" name="areacode"
                                        value='+91' disabled />
                                </Col>
                                <Col md={8}>
                                    <Input type='tel' id='telnum' name='telnum'
                                        placeholder='Contact Tel.'
                                        value={this.state.tel}
                                        onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type='tel' id='email' name='email'
                                        placeholder='Email'
                                        value={this.state.email}
                                        onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message' name='message'
                                        rows='5'
                                        value={this.state.message}
                                        onChange={this.handleInput} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>
                                        Send Message
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactus;