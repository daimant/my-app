import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaURL }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, "email", "Email", [required])}
      {createField(Input, "password", "Пароль", [required])}
      {createField(
        Input,
        "rememberMe",
        null,
        [],
        { type: "checkbox" },
        "Запомнить пароль"
      )}
      {captchaURL && <img src={captchaURL} alt="" />}
      {captchaURL &&
        createField(Input, "captcha", "Введите символы с картинки ", [
          required
        ])}
      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = props => {
  const onSubmit = formData => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
    </div>
  );
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaURL: state.auth.captchaURL
});

export default connect(mapStateToProps, { login })(Login);
