import React, {FunctionComponent} from 'react';

import {ListingDetails} from './types';

import './gallery-listing.css';

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
        <h2>{listing_title}</h2>
        <p>{property_address}</p>

        <p className="description">{listing_description}</p>

      </div>
    </div>
  );
};