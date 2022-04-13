import "./Footer.css";

// import wave2 from "../../../Images/wave2.png";
// import logo from "../../../Images/logo5.png";

const Footer = () => {
  return (
    <section id="footer">
      {/* <img src={wave2} alt="wave2" className="img-fluid" /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-box">
              {/* <img src={logo} alt="logo" className="image" /> */}
              <p>Follow us </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-box">
              <p>
                <b>CONTACT US</b>{" "}
              </p>
              <p>
                {" "}
                <i className="fa fa-map-marker"></i> IACSD Akurdi, Pune
              </p>
              <p>
                {" "}
                <i className="fa fa-phone"></i> +91 0123456789
              </p>
              <p>
                {" "}
                <i className="fa fa-envelope-o"></i> goodvibes@gmail.com
              </p>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="footer-box">
              <p>
                <b>SUBSCRIBE FOR LATEST UPDATES</b>{" "}
              </p>
              <input type="email" className="subs" placeholder="Email" />
              <br></br>
              <button type="button" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <hr />
      <p className="copyright">@ copyright website created by Sourabh Mane & Narendra Mane</p>
    </section>
  );
};

export default Footer;