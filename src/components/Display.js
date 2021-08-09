import React from "react";
import { connect } from "react-redux";
const Display = (props) => {
  return (
    <>
      <div>구독자수는 : {props.count}</div>
    </>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

export default connect(mapStateToProps)(Display);
