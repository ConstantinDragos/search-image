import axios from "axios";

const searchImages = async (search) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID BpslfHP2CwuQB1Q_Yzk7GAf3TUDxOVCJWrSymFFK8CY",
    },
    params: {
      query: search,
    },
  });
  return response.data.results;
};

export default searchImages;
