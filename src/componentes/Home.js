import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {

    render() {

        return (
            <section>
            <div className="Home">
            <p><h3>Opciones de suscripcion</h3></p>
                <Row>
                    <Col className="Suscripciones">
                        <Card id="free" className="orange lighten-1" textclassname='grey-text' 
                        title='Suscripción Free' actions={[<Link to={{
                            pathname: '/Suscripcion',
                            state: 'free'
                        }}> <Button waves="light" className="btn btn-primary" 
                        textclassname="white" >
                                Free </Button></Link>]}>
                        </Card>
                    </Col>
                    <Col className="Suscripciones">
                        <Card id="premium" className='orange lighten-1' textclassname='grey-text' 
                        title='PREMIUM USD 10' actions={[<Link to={{
                            pathname: '/Suscripcion',
                            state: 'premium'
                        }}><Button waves="light" className="btn btn-primary" textclassname="white">
                                Premium </Button></Link>]}>
                        </Card>
                    </Col>
                </Row>
            </div>
            </section>
        );
    }
}

export default Home;