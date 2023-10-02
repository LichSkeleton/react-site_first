import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import ItachiImg from "../assets/Itachi.png";
import AllBeastsImg from "../assets/all_beasts.png";

export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ItachiImg}
                        alt="Itachi"
                    />
                    <Carousel.Caption>
                        <h3>Itachi Uchiha</h3>
                        <p>Lorem  fdsflksdlf sdlfjsdk slkd fjsldk fjj sdflk dsjlf.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={AllBeastsImg}
                        alt="All beasts"
                    />
                    <Carousel.Caption>
                        <h3>All beasts</h3>
                        <p>1Lorem  fdsflksdlf sdlfjsdk slkd fjsldk fjj sdflk dsjlf.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ItachiImg}
                        alt="Itachi"
                    />
                    <Carousel.Caption>
                        <h3>Itachi Uchiha</h3>
                        <p>Lorem  fdsflksdlf sdlfjsdk slkd fjsldk fjj sdflk dsjlf.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}