const DEFAULT_API_LOCALHOST = "http://localhost:3001/api/v1";

export const postsIndex = `${DEFAULT_API_LOCALHOST}/posts`;
export const postShow = (postId) => `${DEFAULT_API_LOCALHOST}/posts/${postId}`;
