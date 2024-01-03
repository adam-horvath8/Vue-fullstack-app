import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios("http://localhost:3004/posts");
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getPosts;
