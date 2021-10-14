import React, { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Deals extends Component {
    render() {
        const offersView = this.props.deals.map((deal) => {
            const offerView =
                <Card>
                    <div className='zoomOnFocus'>
                        <CardImg src={deal.image} alt={deal.name} />
                    </div>
                    <CardImgOverlay>
                        <CardTitle>{deal.name}</CardTitle>
                        <CardBody>
                            {deal.desc}
                        </CardBody>
                    </CardImgOverlay>
                </Card>
            return (
                <div className='col-12 col-md-6 my-4'>
                    {offerView}
                </div>
            );
        })

        return (
            <div className='container'>
                <div className='row'>

                    {offersView}
                </div>
            </div>
        );
    }
}
export default Deals