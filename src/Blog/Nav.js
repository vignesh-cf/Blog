import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const NavButtons = () => {
  const dispatch = useDispatch();

  const onClickHandler = type => {
    dispatch({ type: "navigate", value: type });
  };

  return (
    <>
      <center>
        <Button onClick={() => onClickHandler("new_post")}>New post</Button>
        <Button primary onClick={() => onClickHandler("published_post")}>
          Published post
        </Button>
      </center>
    </>
  );
};
