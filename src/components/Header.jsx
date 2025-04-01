import React from "react";

function Header({ text, bgcolor, textcolor }) {
  console.log(text);

  const headerStyle = {
    backgroundColor: bgcolor,
    color: textcolor,
  };

  return (
    <>
      <header style={headerStyle}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    </>
  );
}

export default Header;
