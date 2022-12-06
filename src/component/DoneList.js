import React, { useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import toDo from "../redux/modules/toDo";
import { render } from "@testing-library/react";
import { itIsDone, deleteToDo } from "../redux/modules/toDo";

function DoneList() {
  const toDoStore = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  const listStyle = {
    border: "3px solid black",
    maxWidth: "250px",
    height: "150px",
    textAlign: "left",
    listStyle: "none",
    borderRadius: "15px",
    padding: "10px",
    margin: "20px",
  };
  const pStyle = {
    width: "100%",
    height: "35px",
  };
  const divStyle = {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
  };
  const linkStyle = {
    color: "black",
  };
  const btnStyle = {
    borderRadius: "15px",
    marginLeft: "10px",
    width: "100px",
    height: "40px",
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div>
      <h2> Done....!!!!</h2>
      <div style={divStyle}>
        {toDoStore.map((item) => {
          if (item.isDone === true) {
            return (
              <div key={item.id} style={listStyle}>
                <Link to={`/work/${item.id}`} style={linkStyle}>
                  <h3>{item.title}</h3>
                  <p style={pStyle}>{item.text}</p>
                </Link>

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
                  취소하기
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default DoneList;
