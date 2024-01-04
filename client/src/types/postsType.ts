export type postsType = postType[];

export type postType = {
  id?: number;
  title: string;
  postText: string;
  username: string;
};

export type newPostFormType = {
  title: string;
  postText: string;
};
