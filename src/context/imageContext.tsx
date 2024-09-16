import { createContext, useEffect, useState } from "react";
import { childrenIFace } from ".";

interface imageIface {
  size: number;
  url: string;
}

const imageFromStorage = localStorage.getItem("image")
  ? JSON.parse(localStorage.getItem("image") || "")
  : {};

interface contextIface {
  image: imageIface;
  setImage: any;
  handleRemoveImage: () => void;
}

export const ImageContext = createContext({} as contextIface);

const ImageProvider = ({ children }: childrenIFace) => {
  const [image, setImage] = useState(imageFromStorage as imageIface);

  const handleRemoveImage = () => {
    setImage({} as imageIface);
    localStorage.removeItem("image");
  };

  useEffect(() => {
    if (image.url) {
      localStorage.setItem("image", JSON.stringify(image));
    }
  }, [image]);

  const values = {
    image,
    setImage,
    handleRemoveImage,
  };

  return (
    <ImageContext.Provider value={values}>{children}</ImageContext.Provider>
  );
};

export default ImageProvider;
