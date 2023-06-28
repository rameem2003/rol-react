import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./appdetails.css";

import { appsData } from "../../appsData";

function Appdetails() {
  const { title } = useParams();
  const [appData, setAppdata] = useState({
    themecolor : "",
    appName : "",
    appLogo : "",
    appui1 : "",
    appui2 : "",
    des : "",
    appLink : "",
    downloadBtnColor : ""
  });

  useEffect(() => {
    const appDetails = appsData.filter(app => app.pageTitle == title);

    setAppdata({
        themecolor : appDetails[0].themeClor,
        appName : appDetails[0].appName,
        appLogo : appDetails[0].appLogo,
        appui1 : appDetails[0].appui1,
        appui2 : appDetails[0].appui2,
        des : appDetails[0].des,
        appLink : appDetails[0].appLink,
        downloadBtnColor : appDetails[0].downloadBtnColor,
    })
  }, [])
  

  return (
    <div className="appDetails">
      {/* <h1>{title}</h1> */}
      <div className="container">
        <div className="app_body" style={{background : `${appData.themecolor}`}}>
          <div className="left">
            <img
              className="img-fluid"
              src={appData.appLogo}
              alt=""
            />
            <h1>" {appData.appName} "</h1>
            <h4>{appData.des}</h4>

            <a href={appData.appLink} style={{background : `${appData.downloadBtnColor}`}} className="downloadBtn">
              <i className="fas fa-download"></i> Download App
            </a>
          </div>

          <div className="right">
            <img
              src={appData.appui1}
              alt=""
            />
            <img
              src={appData.appui2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appdetails;
