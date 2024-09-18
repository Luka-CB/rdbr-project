import { createContext, useEffect, useState } from "react";
import { childrenIFace } from ".";

interface imageIface {
  size: number;
  url: string;
}

const listingImageFromStorage = localStorage.getItem("listingImage")
  ? JSON.parse(localStorage.getItem("listingImage") || "")
  : {};

interface contextIface {
  listingImage: imageIface;
  setListingImage: any;
  handleRemoveListingImage: () => void;
  listingImageError: string;
  setListingImageError: any;
  agentImage: imageIface;
  setAgentImage: any;
  handleRemoveAgentImage: () => void;
  agentImageError: string;
  setAgentImageError: any;
}

export const ImageContext = createContext({} as contextIface);

const ImageProvider = ({ children }: childrenIFace) => {
  const [listingImage, setListingImage] = useState(
    listingImageFromStorage as imageIface
  );
  const [listingImageError, setListingImageError] = useState("");

  const [agentImage, setAgentImage] = useState({} as imageIface);
  const [agentImageError, setAgentImageError] = useState("");

  const handleRemoveListingImage = () => {
    setListingImage({} as imageIface);
    localStorage.removeItem("listingImage");
  };

  const handleRemoveAgentImage = () => {
    setAgentImage({} as imageIface);
  };

  useEffect(() => {
    if (listingImage.url) {
      localStorage.setItem("listingImage", JSON.stringify(listingImage));
      setListingImageError("");
    }

    if (agentImage.url) {
      setAgentImageError("");
    }
  }, [listingImage, agentImage]);

  const values = {
    listingImage,
    setListingImage,
    handleRemoveListingImage,
    listingImageError,
    setListingImageError,
    agentImage,
    setAgentImage,
    handleRemoveAgentImage,
    agentImageError,
    setAgentImageError,
  };

  return (
    <ImageContext.Provider value={values}>{children}</ImageContext.Provider>
  );
};

export default ImageProvider;
