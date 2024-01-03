import axios from "axios";


const getSinglePost = async (id: string | string[]) => {
  try {
    const response = await axios(`http://localhost:3004/posts/byId/${id}`);
    const data = response.data
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getSinglePost;
