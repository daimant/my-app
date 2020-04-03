import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"email"}
          placeholder={"Email"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          placeholder={"Пароль"}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        Запомнить пароль
      </div>
      {props.error && (
        <div className={classes.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
