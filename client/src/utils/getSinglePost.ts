const getSinglePost = async (id: string | string[]) => {
  try {
    const response = await fetch(`http://localhost:3004/posts/byId/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getSinglePost;
