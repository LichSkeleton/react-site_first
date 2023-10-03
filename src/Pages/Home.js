import React, {Component} from "react";
import CarouselBox from "../Components/CarouselBox";
import { Button, Card, Container, CardGroup } from "react-bootstrap";

export default class Home extends Component{
    render(){
        return(
            <>
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4">Our Team</h2>
                <CardGroup>
                <Card>
                    <Card.Img 
                        variant="top"
                        src="https://www.hindustantimes.com/ht-img/img/2023/06/14/1600x900/demon_slayer_season_3_release_1681007034048_1686759381730.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nam iusto assumenda.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img 
                        variant="top"
                        src="https://staticg.sportskeeda.com/editor/2022/08/b8258-16613444278886-1920.jpg"
                    />
                    <Card.Body>
                        <Card.Title>De24</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nam iusto assumenda.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img 
                        variant="top"
                        src="https://m.economictimes.com/thumb/msid-101113358,width-1920,height-1080,resizemode-4,imgsize-46862/demon-slayer-season-4-release-date-cast-everything-we-know-so-far.jpg"
                    />
                    <Card.Body>
                        <Card.Title>Devdsg1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nam iusto assumenda.
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                </Card>
                </CardGroup>
            </Container>
            </>
        )
    }
}