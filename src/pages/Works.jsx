// src/pages/Works.js

import ToDoList from "../component/ToDoList";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { insertToDo } from "../redux/modules/toDo";
import { nanoid } from "nanoid";
import DoneList from "../component/DoneList";

const Works = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const toDo = {
    id: nanoid(),
    title: title,
    text: text,
    isDone: false,
  };
  const toDoStore = useSelector((state) => state.toDo);

  const style = {
    marginTop: "20px",
    width: "100%",
    backgroundColor: "grey",
    margin: "0 auto",
    border: "2px solid black",
    borderRadius: "10px",
  };
  const inputStyle = {
    width: "300px",
    height: "30px",
    marginBottom: "10px",
  };
  const btnStyle = {
    marginLeft: "30px",
    width: "100px",
    height: "40px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "15px",
  };
  const mainStyle = {
    maxWidth: "1200px",
    minWidth: "800px",
  };
  return (
    <div style={mainStyle}>
      <div style={style}>
        <h1> MY TO DO LIST </h1>
        <label>제목</label>
        <input
          style={inputStyle}
          type="text"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          required
        />
        <label>내용</label>
        <input
          style={inputStyle}
          type="text"
          name="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          required
        />
        <button
          style={btnStyle}
          onClick={() => {
            dispatch(insertToDo(toDo));
            setText("");
            setTitle("");
          }}
        >
          추가하기
        </button>
      </div>
      <hr />
      <ToDoList></ToDoList>
      <hr />
      <DoneList />
    </div>
  );
};

export default Works;
