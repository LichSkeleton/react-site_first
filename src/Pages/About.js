import React, {Component} from "react";
import { Nav, Tab, Col, Row, Container } from "react-bootstrap";

export default class About extends Component{
    render()
    {
        const style = {
            containerStyle: {
                marginTop: "120px"
            },
            imageStyle: {
                width: "100%",
                height: "auto"
            },
            textStyle: {
                marginTop: "20px",
                marginBottom: "20px"
            }
    };
        return(
            <Container style={style.containerStyle}>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img style={style.imageStyle} src="https://moewalls.com/wp-content/uploads/2023/08/cyberpunk-naruto-rainy-street-thumb.jpg" alt="1" />
                                    <p style={style.textStyle}>
                                        1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos cum eligendi modi debitis tempore earum provident, nisi, consequuntur perferendis distinctio quia illo cupiditate. Soluta?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img style={style.imageStyle} src="https://images6.alphacoders.com/702/702764.png" alt="2" />
                                    <p style={style.textStyle}>
                                        2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos cum eligendi modi debitis tempore earum provident, nisi, consequuntur perferendis distinctio quia illo cupiditate. Soluta?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img style={style.imageStyle} src="https://images.alphacoders.com/710/710654.jpg" alt="3" />
                                    <p style={style.textStyle}>
                                        3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos cum eligendi modi debitis tempore earum provident, nisi, consequuntur perferendis distinctio quia illo cupiditate. Soluta?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img style={style.imageStyle} src="https://i.pinimg.com/1200x/9e/6a/87/9e6a876b8c9d2806ffc905b0edf60552.jpg" alt="4" />
                                    <p style={style.textStyle}>
                                        4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos cum eligendi modi debitis tempore earum provident, nisi, consequuntur perferendis distinctio quia illo cupiditate. Soluta?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img style={style.imageStyle} src="https://wallpaperaccess.com/full/8012.jpg" alt="5" />
                                    <p style={style.textStyle}>
                                        5Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos cum eligendi modi debitis tempore earum provident, nisi, consequuntur perferendis distinctio quia illo cupiditate. Soluta?
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}