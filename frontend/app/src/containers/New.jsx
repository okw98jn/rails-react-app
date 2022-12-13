import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import newStyle from "../css/newStyle.css";
import TextField from "@mui/material/TextField";

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  text-align: center;
  margin: 30px auto;
`;
export const New = () => {
  const initialValues = {title: "", body: ""};
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  }
  
  const validate = (values) => {
    const errors = {};
    if(!values.title) {
      errors.title = "タイトルを入力してください";
    }
    if (!values.body) {
      errors.body = "内容を入力してください";
    }
    return errors;
  };


  return (
    <>
      <Header />
      <Wrapper>
        <PageTitle>新規投稿</PageTitle>
        <div className="formContainer">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="formField">
              <TextField
                fullWidth
                label="タイトル"
                name="title"
                placeholder="タイトルを入力してください"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <p>{formErrors.title}</p>
            <div className="formField">
              <TextField
                fullWidth
                label="内容"
                name="body"
                placeholder="内容を入力してください"
                multiline
                onChange={(e) => handleChange(e)}
              />
            </div>
            <p>{formErrors.body}</p>
            <button>新規登録</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};
