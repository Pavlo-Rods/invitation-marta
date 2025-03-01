import React, { useEffect, useState } from "react";
import { Page } from "./components/Page/Page";
import { AppStyled } from "./styled";
import { LoadPage } from "./components/LoadPage";

import Image2 from "./images/Proyecto nuevo.png";
import "@fontsource/pinyon-script";

import { Page1, Page3, Page4 } from "./components/Pages";

const pages = [
  {
    img: Image2,
    content: <Page1 />
  },
  {
    img: Image2,
    content: <Page3 />
  },
  {
    img: Image2,
    content: <Page4 />
  }
];

export const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AppStyled>
      {loading && <LoadPage />}
      {pages.map((page, index) => (
        <Page setLoading={setLoading} key={index} index={index} page={page}></Page>
      ))}
    </AppStyled>
  );
};
