import React from "react";
import "./App.css";
import { useFormik } from "formik";
import "./App.css";
const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = "*Required";
  } else if (values.firstname.length > 8) {
    errors.firstname = "*must be 8 characters or less";
  }
  if (!values.lasttname) {
    errors.lastname = "*Required";
  } else if (values.lastname.length > 4) {
    errors.lastname = "*must be 4 characters or less";
  }
  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = "*invalid Email Address";
  }
  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length > 8) {
    errors.password = "*maximum 8 characters";
  } else if (values.password.length < 4) {
    errors.password = "*minimum 4 characters";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "*Required";
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = "*password must match";
  }
  return errors;
};

const App = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: " ",
      password: " ",
      confirmpassword: " ",
    },
    validate,
    onSubmit: (values) => {
      alert(`Hello , ${values.firstname} you successfully signed up!`);
    },
  });
  console.log(formik.values);
  return (
    <div className="main">
      <div className="SignUp-form">
        <h2>sign up here</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname ? (
            <span>{formik.errors.firstname}</span>
          ) : null}

          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname ? (
            <span>{formik.errors.lastname}</span>
          ) : null}

          <input
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password &&
          formik.touched.email &&
          formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}

          <input
            type="password"
            placeholder="password"
            name="password"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmpassword && formik.errors.password ? (
            <span>{formik.errors.password}</span>
          ) : null}

          <input
            type="password"
            placeholder="confirm password"
            name="confirmpassword"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <span>{formik.errors.confirmpassword}</span>
          ) : null}

          <input
            onSubmit={formik.handleSubmit}
            type="submit"
            value="submit "
          ></input>
        </form>
      </div>
    </div>
  );
};

export default App;
