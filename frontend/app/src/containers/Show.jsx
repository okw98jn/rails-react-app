import React from "react";

export const Show = ({ match }) => {
  return (
    <>
      投稿詳細
      <p>postIdは {match.params.postId} です</p>
    </>
  );
};
