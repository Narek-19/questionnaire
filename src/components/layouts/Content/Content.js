import React from "react";
import { Routes, Route } from "react-router-dom";

import Questionnaire from "components/features/Questionnaire/Questionnaire";
import { MainContent } from "components/features/MainContent/MainContent";
import { NotFoundPage } from "components/features/NotFoundPage/NotFoundPage";
import { ROUTES } from "constants/routes";

import style from "./content.module.scss";

const Content = () => {
  return (
    <div className={style.content}>
      <Routes>
        <Route path={ROUTES.home} element={<MainContent />} />
        <Route path={ROUTES.notFound} element={<NotFoundPage />} />

        <Route path="/questionnaire">
          <Route path=":routeId" element={<Questionnaire />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
