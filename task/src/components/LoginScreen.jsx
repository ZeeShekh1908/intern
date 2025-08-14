import React from "react";
import "../css/LoginScreen.css";
import WorkflowLogo from "../assets/Logo.png";
import Plant1 from "../assets/plant1.png";
import Plant2 from "../assets/plant2.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function LoginScreen({ onSignUpClick, onLoginSuccess }) {
  const handleLogin = () => {
 
    onLoginSuccess();
  };

  return (
    <div className="page-wrap">
      <div className="panel shadow-lg rounded-4 position-relative">
        <div className="panel-shade rounded-4"></div>
        <div className="panel-divider"></div>

        <div
          className="container-xxl px-4 px-md-5 py-4 py-md-5 position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="row g-4">
            
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <img src={WorkflowLogo} alt="Workflow Logo" style={{ height: "38px" }} />
              </div>

              <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label className="form-label small text-muted mb-1">Email</label>
                  <input
                    className="form-control form-control-lg soft-input"
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small text-muted mb-1">Password</label>
                  <input
                    className="form-control form-control-lg soft-input"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small text-muted d-block mb-1">Role</label>
                  <div className="d-flex align-items-center gap-3">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="role" id="rAdmin" />
                      <label className="form-check-label small" htmlFor="rAdmin">Admin</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="role" id="rIntern" />
                      <label className="form-check-label small" htmlFor="rIntern">Intern</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="role" id="rUser" defaultChecked />
                      <label className="form-check-label small" htmlFor="rUser">User</label>
                    </div>
                  </div>
                </div>

                <div className="form-check mb-3 d-flex justify-content-center">
                  <input className="form-check-input" type="checkbox" id="remember" />
                  <label className="form-check-label small" htmlFor="remember">Remember me</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-brand w-25"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>

                <div className="mt-2 d-flex justify-content-center">
                  <a className="small text-decoration-none link-muted" href="#">forgot password?</a>
                </div>
              </form>
            </div>

            
            <div className="col-12 col-lg-6">
              <div className="right-side mx-lg-4">
                <p className="text-muted text-center mb-2 small">don't have an account?</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-signup d-inline-flex align-items-center gap-2"
                    onClick={onSignUpClick}
                  >
                    <span className="envelope" aria-hidden>✉️</span>
                    <span>Sign Up with Email</span>
                  </button>
                </div>

                <div className="or-wrap my-3">
                  <div className="or-line"></div>
                  <span className="or-text small text-muted">Or,</span>
                  <div className="or-line"></div>
                </div>

                <p className="text-center small text-muted mb-2">Connect with</p>
                <div className="d-flex justify-content-center gap-4">
                  <button className="social-btn" aria-label="Continue with Google">
                    <FcGoogle size={26} />
                  </button>
                  <button className="social-btn" aria-label="Continue with Facebook">
                    <FaFacebook size={26} color="#1877F2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={Plant1} alt="Plant left" className="plant plant-left" />
        <img src={Plant2} alt="Plant right" className="plant plant-right" />
      </div>
    </div>
  );
}
