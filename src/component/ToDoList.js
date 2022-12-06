import React, { useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import toDo from "../redux/modules/toDo";
import { render } from "@testing-library/react";
import { itIsDone, deleteToDo } from "../redux/modules/toDo";

function ToDoList() {
  const toDoStore = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const listStyle = {
    border: "3px solid black",
    maxWidth: "250px",
    minWidth: "250px",
    height: "160px",
    textAlign: "left",
    listStyle: "none",
    borderRadius: "15px",
    padding: "10px",
    margin: "20px",
  };
  const pStyle = {
    maxWidth: "230px",
  };
  const divStyle = {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
  };
  const linkStyle = {
    color: "black",
    fontSize: "12px",
  };
  const btnStyle = {
    borderRadius: "15px",
    marginLeft: "10px",
    width: "70px",
    height: "30px",
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div>
      <h2> Working....!!!!</h2>
      <div style={divStyle}>
        {toDoStore.map((item) => {
          if (item.isDone === false) {
            return (
              <div key={item.id} style={listStyle}>
                <Link to={`/work/${item.id}`} style={linkStyle}>
                  상세보기
                </Link>
                <h3>{item.title}</h3>
                <p style={pStyle}>{item.text}</p>

                <button
                  style={btnStyle}
                  onClick={() => {
                    dispatch(deleteToDo(item.id));
                  }}
                >
                  삭제하기
                </button>
                <button
                  style={btnStyle}
                  onClick={() => {
                    dispatch(itIsDone(item.id));
                  }}
                >
                  완료하기
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ToDoList;
