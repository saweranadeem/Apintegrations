import React from "react";
import "./CommonStyling.css";
import { Email } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const gotoLoginPage = () => {
    navigate("/login");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is required."),
    }),

    onSubmit: (values) => {
      console.log(values); // Log form values instead of formik.values to avoid confusion
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center loginContainer">
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex justify-content-center align-items-center flex-column loginForm rounded"
      >
        {/* Email Field */}
        <div>
          <div className="iconContainer position-relative d-flex justify-content-center align-items-center">
            <Email />
          </div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email"
            className="loginInput border-0"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </div>

        {/* Forgot Password */}
        <div>
          <p
            className="text-white fs-5"
            style={{ cursor: "pointer" }}
            onClick={gotoLoginPage}
          >
            Back To Login?
          </p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="loginButton border-0 rounded-5">
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default Login;
