import styled from "styled-components";
import { useDispatch } from "react-redux";

const Searchbar = () => {
  const dispatch = useDispatch();
  return (
    <center>
      <div className="input-icons">
        <i className="fa fa-user icon"></i>
        <input
          className="input-field"
          onChange={e => dispatch({ type: "search_post", value: e.target.value })}
          type="text"
          placeholder="Username"
        />
      </div>
    </center>
  );
};

export default Searchbar;
