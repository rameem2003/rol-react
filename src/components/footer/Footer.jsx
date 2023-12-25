import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSquareYoutube,
  FaGithub,
} from "react-icons/fa6";
import "./footer.css";

function Footer() {
  let date = new Date();
  return (
    <div>
      <footer>
        <div className="container">
          <div className="upper-footer">
            <h1>Republic of Legends</h1>
            <h3>Follow Us</h3>
            <div className="links">
              <ul>
                <li>
                  <a href="https://www.facebook.com/we.are.republicoflegends2022">
                    <FaFacebook />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <FaInstagram/>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.youtube.com/@we.are.republicoflegends2022">
                    <FaSquareYoutube />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rol2022">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="lower-footer">
            <h4>
              {" "}
              &copy; {date.getFullYear()} Team Republic of Legends. All Rights
              Resurved.
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
