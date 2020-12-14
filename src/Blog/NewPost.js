import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid ${props => (props.error ? "red" : "blue")};
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: grey;
  }
`;

const Button = styled.button`
  background: blue;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
`;

const Error = styled.small`
  color: red;
`;

export const NewPost = () => {
  const [state, setState] = useState({ tittle: "", description: "", tittleError: "", descriptionError: "" });

  const onChangeHandler = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const dispatch = useDispatch();

  const validate = () => {
    let isError = false,
      Errors = { tittleError: "", descriptionError: "" };

    if (state.tittle.trim().length < 2) {
      Errors.tittleError = "Required minimum 2 characters";
      isError = true;
    }

    if (state.description.trim().length < 10) {
      Errors.descriptionError = "Required minimum 10 characters";
      isError = true;
    }

    setState({ ...state, ...Errors });

    return isError;
  };

  const publish = () => {
    if (validate()) return;

    dispatch({ type: "publishPost", value: { postTittle: state.tittle, postDescription: state.description } });
    setState({ ...state, tittle: "", description: "" });
  };

  return (
    <>
      <Input
        placeholder="Tittle"
        onChange={onChangeHandler}
        name="tittle"
        value={state.tittle}
        error={state.tittleError ? true : false}
      />
      <Error style={{ color: "red" }}>{state.tittleError}</Error>
      <Input
        padding="2em"
        placeholder="A brief text"
        onChange={onChangeHandler}
        name="description"
        value={state.description}
        error={state.descriptionError ? true : false}
      />
      <Error>{state.descriptionError}</Error>
      <Button onClick={publish}>publish</Button>
    </>
  );
};
