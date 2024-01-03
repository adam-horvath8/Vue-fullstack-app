import axios from "axios";

const getComments = async (id: string | string[]) => {
  try {
    const response = await axios(`http://localhost:3004/comments/${id}`);
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getComments;
