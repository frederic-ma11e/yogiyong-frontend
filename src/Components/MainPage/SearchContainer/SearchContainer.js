import React from "react";
import "./SearchContainer.scss";
import "Styles/common.scss";
const SearchContainer = props => {
  // console.log(props.shrink)
  return (
    <div className="SearchContainer" >
      <div
        className="searchImage"
      >
        <span className="searchImage__span">
          <button className="searchImage__span--button" />
        </span>
        <input
          className="searchImage__input"
          placeholder="건물명, 도로명, 지번으로 검색하세요."
        />
        <button className="searchImage__search--button">검색</button>
      </div>
    </div >
  );
};

export default SearchContainer;
