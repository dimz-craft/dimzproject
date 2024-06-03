import React, { useEffect, useRef } from "react";

const allowedBrowsers = ["Chrome", "Edg", "Firefox", "Vivaldi"];
const redirectLink = "https://youtube.com/@dimz_craft?si=ttPfsF59JZijxpw0";

const Ads = ({ props }) => {
  const userAgent = navigator.userAgent;
  const isAllowedBrowser = allowedBrowsers.some((browser) =>
    userAgent.includes(browser)
  );

  useEffect(() => {
    if (!isAllowedBrowser) {
      window.alert(
        "If download error please use browser: Chrome, Edge, FireFox, Vivaldi"
      );
    } else {
      const redirectTimer = setTimeout(() => {
        window.location.href = redirectLink;
      }, 6000);
      return () => clearTimeout(redirectTimer);
    }
  }, []);

  return (
    <div>
      <center>
        <div>
          <div style={{ marginTop: "100px" }}></div>
          Downloading file... <br />
          If download error please use browser: Chrome, Edge,FireFox, Vivaldi<br />
          If you don't get the download file, please chat to the discord server
          or comment on YouTube @dimz_craft
        </div>
      </center>
    </div>
  );
};

export default Ads;
