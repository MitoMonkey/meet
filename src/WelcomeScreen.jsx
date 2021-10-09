import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
        (
            <div className="WelcomeScreen">
                <h2>Welcome to the Meet app</h2>
                <h4>
                    Log in to see upcoming events around the world for full-stack developers
                </h4>
                <div className="google-btn" onClick={() => { props.getAccessToken() }} rel="nofollow noopener">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                    </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
                </div>

                <a
                    className="privacy"
                    href="https://MitoMonkey.github.io/meet/privacy.html"
                    rel="nofollow noopener"
                >
                    Privacy policy
                </a>
            </div>
        )
        : null
}

export default WelcomeScreen;
