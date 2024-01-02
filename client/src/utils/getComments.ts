const getComments = async (id: string | string[]) => {
  try {
    const response = await fetch(`http://localhost:3004/comments/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getComments;
