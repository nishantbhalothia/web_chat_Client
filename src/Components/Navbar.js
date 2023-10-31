import React from "react";
import { FlexBox, FlexBoxRow } from "../StyledComponents/FlexBox";

const Navbar = () => {
  const homeHandler = () => {
    console.log("home");
    window.location.href = "http://localhost:3000/";
  };
  return (
    <div
      className="Navbar"
      id="Navbar"
      style={{ height: "5em", width: "100%", backgroundColor: "purple" }}
    >
      <FlexBoxRow style={{}}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/148/148813.png"
          alt="logo"
          style={{ height: "5em", width: "5em", margin: "0 3em" }}
        />
        <h2 style={{ color: "white", cursor: "pointer" }} onClick={homeHandler}>
          WebChat
        </h2>
      </FlexBoxRow>

      <FlexBoxRow
        style={{
          height: "3em",
          width: "20em",
          margin: "0 3em",
          border: "1px solid black",
          borderRadius: "1.5em",
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      >
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value !== "") {
                window.location.href = `http://localhost:3000/search/${e.target.value}`;
              }
            }
          }
          }
          type="text"
          placeholder="Search"
          style={{
            height: "2em",
            width: "14.5em",
            border: "none",
            outline: "none",
            backgroundColor: "#fff",
            fontSize: "1.1em",
            marginLeft: "1em",
          }}
        />
        <img
          onClick={() => {
            window.location.href = "http://localhost:3000/albums";
          }}
          src="https://cdn-icons-png.flaticon.com/128/667/667332.png"
          alt="search"
          style={{ height: "2em", width: "2em", cursor: "pointer" }}
        />
      </FlexBoxRow>
    </div>
  );
};

export default Navbar;
