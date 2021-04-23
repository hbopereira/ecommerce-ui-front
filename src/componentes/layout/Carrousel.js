import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg, Container } from 'bootstrap-4-react';

const first_src = 'https://cdn.clicksophia.com.br/wp-content/uploads/2021/04/lingerie-para-o-dia-das-maes-desktop.jpg';

const second_src = first_src.replace('First', 'Second');
const third_src = first_src.replace('First', 'Third');

export default class Carrousel extends Component {
    componentWillMount() {
        window.setTimeout(() => Bootstrap.carousel('#carouselExampleIndicators'), 2000);
    }

    render() {
        return (
            <Container>
                <Carousel w="100" id="carouselExampleIndicators">
                    <Carousel.Indicators>
                        <Carousel.Indicator target="#carouselExampleIndicators" to="0" active />
                        <Carousel.Indicator target="#carouselExampleIndicators" to="1" />
                        <Carousel.Indicator target="#carouselExampleIndicators" to="2" />
                    </Carousel.Indicators>
                    <Carousel.Inner>
                        <Carousel.Item active><BImg display="block" w="100" src={first_src} /></Carousel.Item>
                        <Carousel.Item><BImg display="block" w="100" src={second_src} /></Carousel.Item>
                        <Carousel.Item><BImg display="block" w="100" src={third_src} /></Carousel.Item>
                    </Carousel.Inner>
                    <Carousel.Prev href="#carouselExampleIndicators">
                        <Carousel.Prev.Icon />
                    </Carousel.Prev>
                    <Carousel.Next href="#carouselExampleIndicators">
                        <Carousel.Next.Icon />
                    </Carousel.Next>
                </Carousel>
            </Container>
        )
    }
}