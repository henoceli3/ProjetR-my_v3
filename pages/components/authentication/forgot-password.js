import React, { Fragment, useState } from "react";
import Seo from "../../../shared/layout-components/seo/seo";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";

//Images
import logolight from "../../../public/assets/img/brand/logo-light.png";
import user from "../../../public/assets/img/svgs/user.svg";
import logo from "../../../public/assets/img/brand/logo.png";
import axios from "axios";

const ForgotPassword = () => {
  function Swicherbutton() {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
  }

  function remove() {
    document.querySelector(".demo_changer").style.right = "-270px";
    document.querySelector(".demo_changer").classList.remove("active");
  }

  const [data, setData] = useState({
    email: "",
  });

  const { email } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SendResetToken = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://rmy-api.vercel.app/api/forgot-password",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(response.data.message);
      });
  };

  return (
    <div>
      <Seo title="Mot de passe oublié" />

      {/* <!-- Row --> */}
      <Fragment>
        <div className="page main-signin-wrapper">
          <div
            className="d-flex header-setting-icon demo-icon fa-spin"
            onClick={() => Swicherbutton()}
          >
            <span className="nav-link icon">
              <i className="fe fe-settings settings-icon "></i>
            </span>
          </div>
          {/* <!-- Row --> */}
          <Row className="signpages text-center" onClick={() => remove()}>
            <Col md={12}>
              <Card>
                <Row className="row-sm">
                  <Col
                    lg={6}
                    xl={5}
                    className="d-none d-lg-block text-center bg-primary details"
                  >
                    <div className="mt-3 pt-3 p-2 pos-absolute">
                      <img
                        src={logolight.src}
                        className="header-brand-img mb-4"
                        alt="logo-light"
                      />
                      <div className="clearfix"></div>
                      <img src={user.src} className="ht-100 mb-0" alt="user" />
                      <h5 className="mt-4 text-white">
                        Réinitialiser votre Mot de passe
                      </h5>
                      <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                        Signup to create, discover and connect with the global
                        community
                      </span>
                    </div>
                  </Col>
                  <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
                    <Container fluid>
                      <Row className=" row-sm">
                        <Card.Body className="card-body mt-2 mb-2">
                          <img
                            src={logo.src}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                            alt="logo"
                          />
                          <div className="clearfix"></div>
                          <h5 className="text-start mb-2">
                            Mote de passe oublié
                          </h5>
                          <p className="mb-4 text-muted tx-13 ms-0 text-start">
                            Un lien vous sera envoyé dans votre boite mail.
                          </p>
                          <Form>
                            <Form.Group
                              className="text-start"
                              controlId="from email"
                            >
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                className="form-control"
                                placeholder="Entrer votre Email"
                                type="text"
                                defaultValue=""
                                name="email"
                                value={email}
                                onChange={changeHandler}
                              />
                            </Form.Group>
                            <button
                              className="btn ripple btn-main-primary btn-block mt-4"
                              onClick={SendResetToken}
                            >
                              Demander un lien de réinitialisation
                            </button>
                          </Form>
                          <div className="card-footer border-top-0 ps-0 mt-3 text-start ">
                            <p>Rappelez-vous de votre mot de passe ?</p>
                            <p className="mb-0">
                              <Link
                                href={`/components/authentication/reset-password`}
                              >
                                {" "}
                                Créer nouveau MDP
                              </Link>
                            </p>
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

        {/* <!-- End Row --> */}
      </Fragment>
      {/* <!-- End Row --> */}
    </div>
  );
};
ForgotPassword.layout = "Authenticationlayout";

export default ForgotPassword;
