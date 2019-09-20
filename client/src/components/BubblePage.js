import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getColors } from "../actions";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = ({ colors, getColors, isFetching }) => {
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
    getColors();
    setColorList(colors);
  }, [colors]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    colors: state.colors,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getColors }
)(BubblePage);
