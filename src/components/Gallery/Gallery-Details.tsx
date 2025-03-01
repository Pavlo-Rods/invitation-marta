import React, {FunctionComponent} from 'react';

import {ListingDetails} from './types';

import './gallery-listing.css';
import "@fontsource/pinyon-script";

interface Props {
  details: ListingDetails;
}

export const GalleryDetails: FunctionComponent<Props> = ({
  details
}) => {
  const {
    property_address,
    listing_title,
    listing_description
  } = details;

  return (
    <div className="details-container">
      <div className="listing-content">
        <h2 style={{fontFamily: "Pinyon Script", fontSize: 25}}>{listing_title}</h2>
        <p style={{fontFamily: "Pinyon Script", fontSize: 18}}>{property_address}</p>

        <p className="description" style={{fontFamily: "Pinyon Script", fontSize: 20}}>{listing_description}</p>

      </div>
    </div>
  );
};