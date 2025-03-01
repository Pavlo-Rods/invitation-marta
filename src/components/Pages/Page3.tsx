import React from "react";
import { Page3Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import './gallery-grid.css';
import { MapVolhonka } from "./MapVolhinka";
import { Gallery, GalleryDetails } from "../Gallery";
import Image1 from "../../images/Colon-1.png"
import Image2 from "../../images/Colon-2.png"
import Image3 from "../../images/Colon-3.png"

export const Page3: React.FC = () => {

  const images = [Image1, Image2, Image3];
  const isExtended = true;

  const title = "Salón Colón"
  const addr = "En el ayuntamiento de Sevilla"
  const descr = "Precioso salón en el ayuntamiento de Sevilla, donde tendremos la ceremonia de nuestro enlace"

  return (
    <Page3Wrapper>
      <MapVolhonka />
      <Page2Container>
        <div className="advanced-marker-example">
            <Gallery images={images} isExtended={isExtended} />
        </div>
        <GalleryDetails details={{ listing_title: title, property_address: addr, listing_description: descr }}/>
      </Page2Container>
    </Page3Wrapper>
  );
};
