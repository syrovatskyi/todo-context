import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TOGGLE_TODO } from "../contexts/reducer";
import { TodoContext } from "../contexts/context";

const Todo = ({ id, completed, text }) => {
  const { dispatch } = useContext(TodoContext);

  const handleClick = () => {
    dispatch({
      type: TOGGLE_TODO,
      payload: {
        id,
        completed: !completed }
    })
  };
  return (
    <li
      onClick={handleClick}
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
