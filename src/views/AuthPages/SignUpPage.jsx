import React, { Fragment, memo, useState } from "react";

//react-bootstrap
import { Col, Container, Form, Row } from "react-bootstrap";

//react-router-dom
import { Link, useNavigate } from "react-router-dom";

//hooks
import { useTranslation } from "react-i18next";

// axios
import axios from "axios";

//toastify
import toast, { Toaster } from "react-hot-toast";

const SignUpPage = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [termConditions, setTermCondition] = useState(false);

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== cpassword) {
        toast.error("Password didn't matched");
      } else {
        const response = await axios({
          method: "POST",
          url: `https://willuminatytvbackend.onrender.com/api/v1/register`,
          data: {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
          },
        });

        if (response.status === 201) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <main className="main-content">
        <div
          className="vh-100"
          style={{
            backgroundImage: "url(assets/images/pages/01.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
            minHeight: "500px",
          }}
        >
          <Container>
            <Toaster />
            <Row className="justify-content-center align-items-center height-self-center vh-100">
              <Col lg="8" md="12" className="align-self-center">
                <div className="user-login-card bg-body">
                  <h4 className="text-center mb-5">
                    {t("form.create_account")}
                  </h4>
                  <Row lg="2" className="row-cols-1 g-2 g-lg-5">
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.first_name")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.last_name")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.username")} *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.email")} *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="rounded-0"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.password")} *
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="rounded-0"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                    </Col>
                    <Col>
                      <Form.Label className="text-white fw-500 mb-2">
                        {t("form.confirm_password")} *
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="rounded-0"
                        onChange={(e) => {
                          setCPassword(e.target.value);
                        }}
                        required
                      />
                    </Col>
                  </Row>
                  <Form.Label
                    className="list-group-item d-flex align-items-center mt-5 mb-3 text-white"
                    onClick={(e) => {
                      setTermCondition(!termConditions);
                    }}
                  >
                    <Form.Check.Input className="m-0 me-2" type="checkbox" />
                    {t("form.read_and_accept")}
                    <Link to="/#/terms-of-use" className="ms-1">
                      {t("form.terms_conditions")}
                    </Link>
                  </Form.Label>
                  <Row className="text-center">
                    <Col lg="3"></Col>
                    <Col lg="6">
                      <div className="full-button">
                        <div
                          className="iq-button"
                          onClick={(e) => {
                            registerSubmit(e);
                          }}
                        >
                          <Link
                            to="#"
                            className={`btn text-uppercase position-relative`}
                          >
                            <span className="button-text">
                              {t("form.sign_up")}
                            </span>
                            <i className="fa-solid fa-play"></i>
                          </Link>
                        </div>
                        <p className="mt-2 mb-0 fw-normal">
                          {t("form.already_account")}?
                          <a href="/#/login" className="ms-1">
                            {t("shop.login")}
                          </a>
                        </p>
                      </div>
                    </Col>
                    <Col lg="3"></Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Fragment>
  );
});

SignUpPage.displayName = "SignUpPage";
export default SignUpPage;
