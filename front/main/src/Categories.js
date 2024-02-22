import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // axios 사용해서 API와 연결

function Category(props) {
  const [search, setSearch] = React.useState("");
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onClick = async () => {
    if (search.trim() === "") {
      alert("검색어를 입력해주세요");
      return;
    }

    try {
      // axios를 사용하여 데이터 요청
      const response = await axios.post("http://localhost:3002/api/search", {
        switch_name: search,
      });
      props.setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }

    setSearch("");
  };
  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="검색"
        onChange={onChange}
      ></input>
      <button onClick={onClick}>Search</button>
    </div>
  );
}

export default Category;
