import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import { CountryDropdown } from 'react-country-region-selector';
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles-compiled.css';
import CreditCardInput from 'react-credit-card-input';
import '../App.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: '',
      nombre: '',
      apellido: '',
      pais: '',
      email: '',
      cNumber: '',
      cExpiry: '',
      cvc:'',
    };
  }

  componentDidMount() {
    this.setState({ tipo: this.props.location.state })
  }

  selectCountry(val) {
    this.setState({ pais: val });
  }

  handleChangeNombre(event) {
    this.setState({ nombre: event.target.value });
  }

  handleChangeApellido(event) {
    this.setState({ apellido: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangecNumber(event) {
    this.setState({ cNumber: event.target.value });
  }

  handleChangecExpiry(event) {
    this.setState({ cExpiry: event.target.value });
  }

  handleChangeCVC(event) {
    this.setState({ cvc: event.target.value });
  }

  payment(){
    if (this.state.tipo === "premium"){
      return (
      <div><CreditCardInput containerClassName="creditcard" inputClassName="inputCC"
        cardNumberInputProps={{ onChange: this.handleChangecNumber.bind(this) }}
        cardExpiryInputProps={{ onChange: this.handleChangecExpiry.bind(this) }}
        cardCVCInputProps={{ onChange: this.handleChangeCVC.bind(this) }}
          />
        <Cards number={this.state.cNumber}
			nombre={this.state.nombre + " " + this.state.apellido}
			expiry={this.state.cExpiry}
			cvc={this.state.cvc}
		/>
      </div>  );
    }
  }
   
verify(){
 let ver = false;

 if((this.state.nombre.length > 0) &&
      (this.state.apellido.length > 0) &&
      (this.state.email.length > 0) &&
      (this.state.pais.length > 0)){
        ver = true;}
  if(this.state.tipo === "premium"){
        if((this.state.cNumber.length > 0) &&
            (this.state.cExpiry.length > 0) &&
            (this.state.cvc.length > 0)){
  }else{
    ver = false;
  }
  }
  return ver;
}

 subscription() { 
   console.log(this.state);
   if (this.verify()){
    this.post();
   }else{
    window.Materialize.toast('Campos incompletos', 1000);
   }
    
  }
  
  post () {
    const url='https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones';

    var datosEnviados = null;
    
    if (this.state.tipo === "premium") {    
        datosEnviados = {
            tipo: this.state.tipo,
            nombre: this.state.nombre + " " + this.state.apellido,
            pais: this.state.pais,
            email: this.state.email,
            cNumber: this.state.cNumber,
            cExpiry: this.state.cExpiry,
            cvc: this.state.cvc,
        };
    } else {
        datosEnviados = {
            tipo: this.state.tipo,
            nombre: this.state.nombre + " " + this.apellido,
            pais: this.state.pais,
            email: this.state.email,          
        };
    }
            console.log(datosEnviados);

        fetch(url,{
            method: 'post',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(datosEnviados)
            
        })
        .then(JSON.stringify(datosEnviados))
        .then(function (data) {
          console.log('Request succeeded with JSON response', data);
          window.Materialize.toast('Gracias por suscribirse!!',2000);

        })
        .catch(function (error) {
          console.log('Request failed', error);
          window.Materialize.toast('Request failed', 1000);
        });
    }

  render() {
    const { country } = this.state;
    return (
      <div className="Suscripcion">
        <Row>
          <form>
            <Input id="userName" s={6} label="Nombre" onChange={this.handleChangeNombre.bind(this)} />
            <Input s={6} label="Apellido" validate onChange={this.handleChangeApellido.bind(this)} />
            <CountryDropdown 
              value={country}
              onChange={(val) => this.selectCountry(val)} className="showBlock" />

            <Input type="email" label="Email" s={6} validate 
            onChange={this.handleChangeEmail.bind(this)} />
          </form>
        </Row>
        <div className="cvcDiv"> {this.payment()} </div>
        <Button waves="orange" className="btn btn-warning" textclassname="white" 
        onClick={ () => {this.subscription()}} disabled={this.state.boton}>Suscribirse</Button>
      </div>
    );
  }
}

export default Register;