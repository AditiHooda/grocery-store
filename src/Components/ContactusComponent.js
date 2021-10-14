import React from "react";
import { Card, CardBlock, CardTitle } from "reactstrap";

function Contactus() {
    return (
        <div className='container'>
            <div class="row row-content">
                <div class="col-12 my-4 text-center">
                    <h1> <span className='text-success'>CONTACT</span> US </h1>
                </div>
                <div class="col-12 col-md-9 offset-md-2">
                    <form>
                        <div class="form-group row">
                            <label for="name" class="col-md-2 col-form-label">
                                Name
                            </label>
                            <div class="col-5">
                                <input type="text" class="form-control" id="firstname" name="firstname"
                                    placeholder="First Name" />
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" id="lastname" name="lastname"
                                    placeholder="Last Name" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="Telnum" class="col-12 col-md-2 col-form-label">
                                Contact Tel.:
                            </label>
                            <div class="col-2 col-md-2">
                                <input type="tel" class="form-control" id="areacode" name="areacode"
                                    value='+91' disabled />
                            </div>
                            <div class="col-7 col-md-8">
                                <input type="tel" class="form-control" id="telnum" name="telnum"
                                    placeholder="Tel. number" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="emailid" class="col-md-2 col-form-label">
                                Email Id
                            </label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" id="emailid" name="emailid"
                                    placeholder="Email Id" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="message" class="col-md-2 col-form-label">
                                Your Message
                            </label>
                            <div class="col-md-10">
                                <textarea type="text" class="form-control" id="message" name="message"
                                    rows="5" placeholder='Write your message here'></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="text-center col-md-10">
                                <button type="submit" class="btn btn-primary">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contactus;