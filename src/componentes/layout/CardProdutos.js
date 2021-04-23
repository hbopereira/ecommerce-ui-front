import React from 'react'
import { Card, BSmall, Blockquote, Container } from 'bootstrap-4-react';
const CardProdutos = () => {

    let img_src = "https://cdn.clicksophia.com.br/wp-content/uploads/2019/09/conjunto-em-microfibra-lisa-com-detalhe-em-strappy-yvonete-630x740.jpg";
    return (
        <>
            <Container>
                <Card.Deck mb="3">
                    <Card>
                        <Card.Body>
                            <Card.Image src={img_src} />
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text><BSmall text="muted">Comprar</BSmall></Card.Text>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Image src={img_src} />
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text><BSmall text="muted">Comprar</BSmall></Card.Text>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Image src={img_src} />
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text><BSmall text="muted">Comprar</BSmall></Card.Text>
                        </Card.Footer>
                    </Card>
                </Card.Deck>
            </Container>
        </>
    )
}

export default CardProdutos