import { createContext, useState } from "react";
import { childrenIFace } from ".";
import api from "../utils/axios";
import { regionIFace } from "./regions";

export interface listingIFace {
  id: string;
  address: string;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: number;
  image: string;
  city_id: number;
  city: {
    id: number;
    name: string;
    region_id: number;
    region: regionIFace;
  };
}

interface postListingIFace {
  address: string;
  image: string | any;
  region_id: number;
  description: string;
  city_id: number;
  zip_code: string;
  price: number;
  area: number;
  bedrooms: number;
  is_rental: number;
  agent_id: number;
}

interface contextIFace {
  listings: listingIFace[];
  addListingSuccess: boolean;
  setAddListingSuccess: any;
  addListing: (listing: postListingIFace) => void;
  getListings: () => void;
  addListingLoading: boolean;
}

export const ListingContext = createContext({} as contextIFace);

const ListingProvider = ({ children }: childrenIFace) => {
  const [listings, setListings] = useState<listingIFace[]>([]);
  const [addListingLoading, setAddListingLoading] = useState(false);
  const [addListingSuccess, setAddListingSuccess] = useState(false);

  const addListing = async (listing: postListingIFace) => {
    setAddListingLoading(true);

    try {
      const { data } = await api.post("/real-estates", listing, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data) {
        setAddListingLoading(false);
        setAddListingSuccess(true);
      }
    } catch (error) {
      setAddListingLoading(false);
      console.error(error);
    }
  };

  const getListings = async () => {
    try {
      const { data } = await api("/real-estates");

      if (data) setListings(data);
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    listings,
    addListingSuccess,
    setAddListingSuccess,
    addListing,
    getListings,
    addListingLoading,
  };

  return (
    <ListingContext.Provider value={values}>{children}</ListingContext.Provider>
  );
};

export default ListingProvider;
