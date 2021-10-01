import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const PublicMainLayout = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(propsCom) => {
        return (
          <MainLayout>
            <Component {...propsCom} />
          </MainLayout>
        );
      }}
    />
  );
};
export default PublicMainLayout;
