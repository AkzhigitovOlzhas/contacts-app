import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "./Header";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { contactsActions } from "../store/contacts/actions";
function ContactForm() {
  const { id } = useParams();
  const contact = getContact(id);
  const [like, setLike] = useState(contact.like);
  const history = useHistory();
  const dispatch = useDispatch();

  function getContact(id) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    for (const contact of contacts) {
      if (+contact.id === +id) {
        return contact;
      }
    }
  }
  function init() {
    return {
      firstName: contact.firstName,
      lastName: contact.lastName,
      country: contact.country,
      city: contact.city,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      website: contact.website,
    };
  }
  function validate(values) {
    const errors = {};
    if (!values.firstName.trim()) {
      errors.firstName = "Required";
    }
    if (!values.lastName.trim()) {
      errors.lastName = "Required";
    }
    if (!values.country.trim()) {
      errors.country = "Required";
    }
    if (!values.city.trim()) {
      errors.city = "Required";
    }
    if (!values.phoneNumber.trim()) {
      errors.phoneNumber = "Required";
    } else if (/[a-zA-Z]/g.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!values.email.trim()) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.website.trim()) {
      errors.website = "Required";
    } else if (!/[A-Za-z]{2,6}$/.test(values.website)) {
      errors.website = "Invalid domain name";
    }
    return errors;
  }
  function handleSetLike() { 
    if (like) {
      setLike(!like);
      return;
    } else {
      contact.like = true;
    }
    setLike(contact.like);
  }
  return (
    <div>
      <Header />
      <Formik
        initialValues={init()}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          let contacts = JSON.parse(localStorage.getItem("contacts"));
          for (let i = 0; i < contacts.length; i++) {
            if (+contacts[i].id === +id) {
              contacts[i] = {
                ...values,
                id: id,
                image: contact.image,
                like: like,
              };
              break;
            }
          }
          localStorage.setItem("contacts", JSON.stringify(contacts));
          dispatch(contactsActions.setContacts(contacts));
          history.push("/");
        }}
      >
        {({ isSubmitting }) => (
          <Form className="contact_form">
            <div className="image_block">
              <img src={contact.image} alt="" className="contact_image" />
              <img
                src={
                  like ? "../img/icons/heart2.png" : "../img/icons/heart1.png"
                }
                alt=""
                className="contact_like"
                onClick={() => handleSetLike()}
              />
            </div>
            <div className="fields">
              <div className="left">
                <div className="label">
                  First name:
                  <Field type="text" name="firstName" className="field" />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="label">
                  City:
                  <Field type="text" name="city" className="field" />
                  <ErrorMessage name="city" component="div" className="error" />
                </div>
                <div className="label">
                  Phone Number:
                  <Field type="text" name="phoneNumber" className="field" />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="label">
                  Website:
                  <Field type="text" name="website" className="field" />
                  <ErrorMessage
                    name="website"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="right">
                <div className="label">
                  Last name:
                  <Field type="text" name="lastName" className="field" />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="label">
                  Country:
                  <Field type="text" name="country" className="field" />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="label">
                  Email:
                  <Field type="email" name="email" className="field" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="label">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit_btn"
                  >
                    Save Contact
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
