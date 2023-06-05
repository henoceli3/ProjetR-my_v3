import React, { Fragment, useEffect, useState } from "react";
import Seo from "../../../shared/layout-components/seo/seo";

import Link from "next/link";
import { Row, Col, Card, Container, Form } from "react-bootstrap";

//Images
import logolight from "../../../public/assets/img/brand/logo-light.png";
import user from "../../../public/assets/img/svgs/user.svg";
import logo from "../../../public/assets/img/brand/logo.png";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useRouter } from "next/router";

const ResetPassword = () => {
  function Swicherbutton() {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
  }

  function remove() {
    document.querySelector(".demo_changer").style.right = "-270px";
    document.querySelector(".demo_changer").classList.remove("active");
  }

  let navigate = useRouter();
  const routeChange = () => {
    let path = `../../`;
    navigate.push(path);
  };

  const router = useRouter();
  const { token } = router.query;
  const [data, setData] = useState({
    token: "", // Set initial value of token using token query parameter
    mot_de_passe: "",
  });

  useEffect(() => {
    if (token) {
      setData((prevData) => ({ ...prevData, token }));
    }
  }, [token]);

  const { mot_de_passe } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const updateMPD = (e) => {
    e.preventDefault();
    console.log(token);
    axios
      .put("http://localhost:4000/api/reset-password", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        routeChange();
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Seo title="Reset Password" />

      {/* <!-- Row --> */}
      <Fragment>
        <div className="page main-signin-wrapper">
          <div
            className="d-flex header-setting-icon demo-icon fa-spin"
            onClick={() => Swicherbutton()}
          >
            <a className="nav-link icon">
              <i className="fe fe-settings settings-icon "></i>
            </a>
          </div>
          <Row className="signpages text-center" onClick={() => remove()}>
            <Col md={12}>
              <Card>
                <Row className="row-sm">
                  <Col
                    lg={6}
                    xl={5}
                    className="d-none d-lg-block text-center bg-primary details"
                  >
                    <div className="mt-5 pt-5 p-2 pos-absolute">
                      <img
                        src={logolight.src}
                        className="header-brand-img mb-4"
                        alt="logo"
                      />
                      <div className="clearfix"></div>
                      <img src={user.src} className="ht-100 mb-0" alt="user" />
                      <h5 className="mt-4 text-white">
                        réinitialiser votre mot de passe
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
                        <Card.Body className="mt-2 mb-2">
                          <img
                            src={logo.src}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                            alt="logo"
                          />
                          <img
                            src={logolight.src}
                            className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                            alt="logo"
                          />
                          <div className="clearfix"></div>
                          <h5 className="text-start mb-2">
                            réinitialiser votre mot de passe
                          </h5>
                          <p className="mb-4 text-muted tx-13 ms-0 text-start"></p>

                          {/* <!-- Row --> */}
                          <Form>
                            <Form.Group
                              className="text-start form-group"
                              controlId="formNewPassword"
                            >
                              <Form.Label>Nouveau Mot de passe</Form.Label>
                              <Form.Control
                                placeholder="Entrer votre nouveau mot de passe"
                                type=""
                                name="mot_de_passe"
                                value={mot_de_passe}
                                onChange={changeHandler}
                              />
                            </Form.Group>
                            <Form.Group
                              className="text-start form-group"
                              controlId="formpassword"
                            >
                              <Form.Label>
                                Confirmer votre mot de passe
                              </Form.Label>
                              <Form.Control
                                placeholder="Confirmer votre mot de passe"
                                type=""
                              />
                            </Form.Group>

                            <button
                              className="btn ripple btn-main-primary btn-block mt-2"
                              onClick={updateMPD}
                            >
                              Créer Mot de passe
                            </button>
                          </Form>
                          <div className="text-start mt-5 ms-0">
                            <p className="mb-0">
                              Vous avez déjà un compte ?
                              <Link href={`/components/authentication/signin`}>
                                Identifiez-vous
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
ResetPassword.layout = "Authenticationlayout";

export default ResetPassword;
