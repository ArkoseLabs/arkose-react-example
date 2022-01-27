import React from "react";
import { useEffect } from "react";

const ArkoseLabs = (props) => {
  window.Arkose = {};

  function createArkoseScript(props) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://client-api.arkoselabs.com/v2/" + props.privateKey + "/api.js";
    script.setAttribute("data-callback", "setupEnforcement");
    script.async = true;
    script.defer = true;
    script.id = "arkose-script";

    document.head.append(script);

    return () => {
      const object = document.getElementById("arkose-script");
      object.remote();
    };
  }

  // We only want to have the API script tag created once
  useEffect(() => {
    createArkoseScript(props);
    // eslint-disable-next-line
  }, []);

  return <div id="arkose-ec"></div>;
};

export default ArkoseLabs;