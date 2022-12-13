import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Header } from "./Header";
import postsStyle from "../css/postsStyle.css";
import styled from "styled-components";
import { fetchPosts } from "../apis/posts";

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  text-align: center;
  margin: 30px auto;
`;
const PostsListArea = styled.div`
  margin-bottom: 150px;
`;

export const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) =>
      setPosts(data)
    )
  },[])
  return (
    <>
      <Header />
      <Wrapper>
        <PageTitle>掲示板一覧</PageTitle>
        <PostsListArea>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>タイトル</th>
                <th>内容</th>
                <th>作成日時</th>
                <th>更新日時</th>
                <th>詳細</th>
              </tr>
            </thead>
            {posts.map((post, index) => (
              <tbody key={post.id}>
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>{moment(post.created_at).format("YYYY年MM月DD日")}</td>
                  <td>{moment(post.updated_at).format("YYYY年MM月DD日")}</td>
                  <td>
                    <Link
                      to={`/posts/${post.id}`}
                      key={index}
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      詳細へ
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </PostsListArea>
      </Wrapper>
    </>
  );
};
