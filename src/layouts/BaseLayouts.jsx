import React, { Suspense } from "react";
import routerConfig from "../routes/routerConfig";
import routes from "../routes/routes";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const BaseLayouts = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <main>
          {routerConfig(routes)}
        </main>
      </Suspense>

      <Footer />
    </div>
  );
};

export default BaseLayouts;
