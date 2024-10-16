import { memo, Fragment } from "react";

//react-router-dom
import { Link } from "react-router-dom";

const BrandLogo = memo(() => {
  return (
    <Fragment>
      <div className="logo-default">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo.webp"
            loading="lazy"
            alt="WilluminatyTV"
          />
        </Link>
      </div>
      <div className="logo-hotstar">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo-hotstar.webp"
            loading="lazy"
            alt="WilluminatyTV"
          />
        </Link>
      </div>
      <div className="logo-prime">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo-prime.webp"
            loading="lazy"
            alt="WilluminatyTV"
          />
        </Link>
      </div>
      <div className="logo-hulu">
        <Link className="navbar-brand text-primary" to="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo-hulu.webp"
            loading="lazy"
            alt="WilluminatyTV"
          />
        </Link>
      </div>
    </Fragment>
  );
});

BrandLogo.displayName = "BrandLogo";
export default BrandLogo;
