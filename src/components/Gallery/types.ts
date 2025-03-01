export interface RealEstateListing {
    uuid: string;
    details: ListingDetails;
    images: string[];
  }
  
  export interface ListingDetails {
    property_address: string;
    listing_title: string;
    listing_description: string;
  }