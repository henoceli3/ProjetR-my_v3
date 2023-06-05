import React from 'react'
import dynamic from 'next/dynamic';
import Seo from '../../../shared/layout-components/seo/seo'
import { Row, Col, Card, Container, Form } from "react-bootstrap";

import Link from "next/link"


//Images
import logolight from "../../../public/assets/img/brand/logo-light.png"
import user from "../../../public/assets/img/svgs/user.svg"
import logo from "../../../public/assets/img/brand/logo.png"

const Signin = () => {

  function Swicherbutton() {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
 }

 function remove  () {
  document.querySelector(".demo_changer").style.right = "-270px";
  document.querySelector(".demo_changer").classList.remove("active");
}
  return (
    <div>
        <Seo title="Signin"/>
		<div className="page main-signin-wrapper"
    >
      <div className="d-flex header-setting-icon demo-icon fa-spin"
       onClick={() => Swicherbutton()}
       >
			<a className="nav-link icon">
          <i className="fe fe-settings settings-icon "></i>
			</a>
      </div>
      <Row className="signpages text-center" 
      onClick={() => remove()}
      >
        <Col md={12}>
          <Card>
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center bg-primary details"
              >
                <div className="mt-5 pt-4 p-2 pos-absolute">
                  {/* <img
                    src={logolight.src}
                    className="header-brand-img mb-4"
                    alt="logo-light"
                  /> */}
                  <h1>R-MY</h1>
                  <div className="clearfix"></div>
                  <img
                    src={user.src}
                    className="ht-100 mb-0"
                    alt="user"
                  />
                  <h5 className="mt-4 text-white">Page de connexion</h5>
                  <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                   Logiciel offrant une gestion facile et rapide des obligations et entités tierces
                  </span>
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                <Container fluid>
                  <Row className="row-sm">
                    <Card.Body className="mt-2 mb-2">
                      {/* <img
                        src={logo.src}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={logolight.src}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                        alt="logo"
                      /> */}
                      <h1>R-MY</h1>
                      <div className="clearfix"></div>
                      <Form>
                        <h5 className="text-start mb-2">
                          Connexion au compte
                        </h5>
                        <p className="mb-4 text-muted tx-13 ms-0 text-start">
                          Entrez vos données pour acceder a la plateforme
                        </p>
                        <Form.Group className="text-start form-group" controlId="formEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            placeholder="Entrer votre email"
                            type="Email"
                          />
                        </Form.Group>
                        <Form.Group
                          className="text-start form-group"
                          controlId="formpassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            placeholder="Enter votre mot de passe"
                            type="password"
                          />
                        </Form.Group>
                        <Link href={"/components/dashboard/dashboard"} >
                        <button className="btn ripple btn-main-primary btn-block mt-2">
                          Connexion
                        </button>
                        </Link>
                      </Form>
                       <div className="text-start mt-5 ms-0">
                        <div className="mb-1">
                          <Link
                            href={`/components/authentication/forgot-password/`}
                          > 
						  Mot de passe oublié ? 
                          </Link>
                        </div>
                      {/*  <div>
                          {`Don't`} have an account?
                          <Link
                            href={`/components/authentication/signup/`}
                          >
							Resgister Here
						  </Link>
                        </div>*/}
                      </div> 
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
    </div>
  )
}
Signin.layout = "Authenticationlayout"

export default Signin