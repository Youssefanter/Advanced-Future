import React, {Component} from 'react';
import ArabicHeaderComp from './ArabicHeaderComp';
import ArabicFooterComp  from './ArabicFooterComp';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/LOGO.jpeg';
import '../App.css';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
      <ArabicHeaderComp 
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          />
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div dir="rtl" className="container">
          <div className="col-12 col-sm-2">
              <h3>معلومات عنا</h3>
          </div>
          <hr />
          <div className="container">
            <Card className="cardBack">
              <CardBody>
                <div className="row ">
                  <div className="col-12 col-sm-12">
                    <CardTitle>Advanced Future</CardTitle>
                  </div>
                  <div className="col-12 col-sm-8">
                    <CardText className="fonts">شركتنا لا تستريح ، فلدينا دائمًا ما يلبي احتياجات شخص ما ، نقدمه وأنت تقرر</CardText>
                    <CardText><a href="/"><i className="fa fa-facebook"></i> Facebook</a> <br></br></CardText>
                    <CardText><a href="/"><i className="fa fa-instagram"></i> Instagram </a> <br></br></CardText>
                    <CardText><a href="/"><i className="fa fa-whatsapp"></i> Whatsapp </a> <br></br> </CardText>
                    <CardText><a href="tel:+201121053405"><i className="fa fa-phone"></i> للمزيد من المعلومات، تواصل معنا</a> </CardText>
                  </div>
                  <div className="col-12 col-sm-4">
                    <CardImg top width="100%" src={logo} alt="Card image cap" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row row-content">
            <div className="row col-sm-1">
                <div className="col-12 col-sm-12">
                    <h3>العنوان</h3>
                </div>
            </div>
            <hr />
            <div className="row col-12 col-sm-12">
                <div className="row row-content col-sm-5">
                    <h5>العنوان هنا</h5>
                    <hr />
                    <p><i className="fa fa-phone"></i> +201121053405  <i className="fa fa-fax"></i> +201092646968  <i className="fa fa-envelope"></i> <a href="mailto:Future@gmail.com">Future@gmail.com</a></p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <ArabicFooterComp />
      </>
    );
  }
}
