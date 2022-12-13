import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  const Header = styled.div`
    padding: 8px 100px;
    display: flex;
    justify-content: space-between;
  `;

  const NewLink = styled(Link)`
    background: #eee;
    border-radius: 3px;
    max-width: 280px;
    padding: 10px 25px;
    color: #313131;
    transition: 0.3s ease-in-out;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      background: #313131;
      color: #fff;
    }
  `;
  return (
    <>
      <Header>
        <h2>Reactメモ</h2>
        <NewLink to="/posts/new">新規作成</NewLink>
      </Header>
    </>
  );
};
