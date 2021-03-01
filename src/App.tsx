import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  Footer, Header, NizhegorodetsModel, NizhegorodetsModel2, NizhegorodetsModel3, PhotosWorks, ServicesJobs, CleaningReservoirs,
  ReclamationBeaches, SapropelMining, SandMining, Rent, AboutCompany, MainPage, Patents, Reviews,
} from "./components/index";
import { Direction } from "./data/constants";

import "antd/dist/antd.css";
import "./styles/fonts.scss";
import "./app.scss";
import "./styles/index.scss";



function App() {
  return (
    <div className="wrapper">
      <Header />

      <Switch>
        <Route
          path={Direction.NIZHEGORODETS_1}
          render={() => <NizhegorodetsModel />}
        />
        <Route
          path={Direction.NIZHEGORODETS_2}
          render={() => <NizhegorodetsModel2 />}
        />
        <Route
          path={Direction.NIZHEGORODETS_3}
          render={() => <NizhegorodetsModel3 />}
        />

        <Route path={Direction.PFOTOS_WORK} render={() => <PhotosWorks />} />
        <Route path={Direction.SERVICES_JOBS} render={() => <ServicesJobs />} />

        <Route
          path={Direction.CLEANING}
          render={() => <CleaningReservoirs />}
        />
        <Route
          path={Direction.INWASH_BEACHES}
          render={() => <ReclamationBeaches />}
        />
        <Route
          path={Direction.SAPROPEL_MINING}
          render={() => <SapropelMining />}
        />
        <Route path={Direction.INWASH_SANDS} render={() => <SandMining />} />

        <Route path={Direction.RENT} render={() => <Rent />} />
        <Route path={Direction.ABOUT_COMPANY} render={() => <AboutCompany />} />
        <Route path={Direction.PATENTS} render={() => <Patents />} />
        <Route path={Direction.REVIEWS} render={() => <Reviews />} />

        <Route path={Direction.MAIN_PAGE} render={() => <MainPage />} />

        <Route
          exact
          path="/"
          render={() => <Redirect from="/" to={Direction.MAIN_PAGE} />}
        />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
