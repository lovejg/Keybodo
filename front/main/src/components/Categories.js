import React, { useEffect, useState } from "react";
import axios from "axios"; // axios 사용해서 API와 연결

function Category(props) {
  const [search, setSearch] = React.useState("");
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
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
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            value={search}
            placeholder="eg.체리 스위치"
            onChange={onChange}
          />
        </label>
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

export default Category;
