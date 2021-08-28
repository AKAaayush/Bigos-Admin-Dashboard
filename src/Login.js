import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
          <div class="login-panel panel panel-default">
            <div class="panel-heading">Log in</div>
            <div class="panel-body">
              <form role="form">
                <fieldset>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="E-mail"
                      name="email"
                      type="email"
                      autofocus=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Password"
                      name="password"
                      type="password"
                      value=""
                    />
                  </div>
                  <div class="checkbox">
                    <label>
                      <input
                        name="remember"
                        type="checkbox"
                        value="Remember Me"
                      />
                      Remember Me
                    </label>
                  </div>
                  <Link to="/home" class="btn btn-primary">
                    Login
                  </Link>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
