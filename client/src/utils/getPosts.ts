

const getPosts = async () => {
  try {
    const response = await fetch("http://localhost:3004/posts");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return []; 
  }
};

export default getPosts;

