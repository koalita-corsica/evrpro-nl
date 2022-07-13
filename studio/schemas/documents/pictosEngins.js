import { RiTruckFill } from "react-icons/ri";

export default {
  name: "pictosEngins",
  type: "document",
  title: "Pictos Engins",
  icon: RiTruckFill,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "picto",
      type: "image",
      title: "Picto Image",
    },
  ],
};
