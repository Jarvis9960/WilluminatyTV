import React, { memo, Fragment } from "react";

// react-router
import { Link } from "react-router-dom";

// img
import img1 from "/assets/images/logoss.webp";
import hostar from "/assets/images/logoss-hotstar.webp";
import prime from "/assets/images/logoss-prime.webp";
import hulu from "/assets/images/logoss-hulu.webp";

const Logo = memo(() => {
  return (
    <Fragment>
      <div className="logo-default">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src={img1}
            loading="lazy"
            alt="WilluminatyTV"
          />
        </Link>
      </div>
      <div className="logo-hotstar">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src={hostar}
            loading="lazy"
            alt="WilluminatyTV"
          />
        </Link>
      </div>
      <div className="logo-prime">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src={prime}
            loading="lazy"
            alt="WilluminatyTV"
          />
        </Link>
      </div>
      <div className="logo-hulu">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src={hulu}
            loading="lazy"
            alt="WilluminatyTV"
          />
        </Link>
      </div>
    </Fragment>
  );
});

Logo.displayName = "Logo";
export default Logo;
