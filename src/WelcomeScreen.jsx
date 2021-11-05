import React from "react";
import './WelcomeScreen.css';

function WelcomeScreen(props) {
    return (
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
                <p>The Meet app is a pure study project.</p>
                <p>It only uses a mock calender (https://www.googleapis.com/auth/calendar.events.readonly).</p>
                <p>No user information is saved or used within the application, and personal calendars aren’t accessed.</p>
                <p>The author is <a className="link" rel="nofollow noopener" href="https://mitomonkey.github.io/Portfolio-Website/index.html">Michael Flohrschütz</a>.</p>
                <p>The source code of the app can be found in the <a className="link" rel="nofollow noopener" href="https://github.com/MitoMonkey/meet">Github repo</a>.</p>
                <a
                    className="privacy"
                    href="https://MitoMonkey.github.io/meet/privacy.html"
                    rel="nofollow noopener"
                >
                    Privacy policy
                </a>
            </div>
    )            
}

export default WelcomeScreen;
