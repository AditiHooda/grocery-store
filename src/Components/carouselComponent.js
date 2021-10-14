import React, { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class CarouselComp extends Component {
    render() {
        return (
            <Card>
                <CardImg width="100%" src='assets/images/deal-bg.jpg' />
                <CardImgOverlay>
                    <CardBody><h4>Fresh And Organic</h4>
                        <h1>Your Daily Need Products</h1></CardBody>
                </CardImgOverlay>
            </Card>


            // < div id="mycarousel" class="carousel slide" data-ride="carousel" >
            //     <div class="carousel-inner" role="listbox">
            //         <div class="carousel-item active">
            //             <div class="carousel-caption d-none d-md-block">
            //                 <h2 class="mt-0">Uthappizza
            //                     <span class="badge badge-danger">HOT</span>
            //                     <span class="badge badge-pill badge-secondary">$4.99</span>
            //                 </h2>
            //                 <p>A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with
            //                     Cerignola
            //                     olives,
            //                     ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.</p>
            //             </div>
            //         </div>
            //         <div class="carousel-item">
            //             <div class="carousel-caption d-none d-md-block">
            //                 <h2>Weekend Grand Buffet
            //                     <span class="badge badge-danger">NEW</span>
            //                 </h2>
            //                 <p>Featuring mouthwatering combinations with a choice of five different salads, six
            //                     enticing
            //                     appetizers,
            //                     six main entrees and five choicest desserts. Free flowing bubbly and soft drinks.
            //                     All
            //                     for
            //                     just
            //                     $19.99 per person </p>
            //             </div>
            //         </div>
            //         <div class="carousel-item">
            //             <div class="carousel-caption d-none d-md-block">
            //                 <h2>Alberto Somayya</h2>
            //                 <h4>Executive Chef</h4>
            //                 <p>Award winning three-star Michelin chef with wide International experience having
            //                     worked
            //                     closely
            //                     with
            //                     whos-who in the culinary world, he specializes in creating mouthwatering
            //                     Indo-Italian fusion
            //                     experiences. </p>
            //             </div>
            //         </div>
            //     </div>
            //     {/* <ol class="carousel-indicators">
            //         <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
            //         <li data-target="#mycarousel" data-slide-to="2"></li>
            //         <li data-target="#mycarousel" data-slide-to="1"></li>
            //     </ol>
            //     <a class="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
            //         <span class="carousel-control-prev-icon"></span>
            //     </a>
            //     <a class="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
            //         <span class="carousel-control-next-icon"></span>
            //     </a>
            //     <button class="btn btn-danger btn-sm" id="carouselButton">
            //         <span class="fa fa-pause"></span>
            //     </button> */}
            // </div >
        );
    }
}

export default CarouselComp;