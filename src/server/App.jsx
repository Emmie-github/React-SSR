import React from "react";
// import Home from "@/pages/Home";
import { StaticRouter } from "react-router-dom";
import RouteApp from "@/routes/RouteApp";
import { Provider } from "react-redux";
// import store from "../store";

export default ({ location, context, store }) => {
  // return <Home />;
  return (
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <RouteApp />
      </StaticRouter>
    </Provider>
  );
};
