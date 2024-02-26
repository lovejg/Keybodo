import React, { useEffect, useState } from "react";
import axios from "axios"; // axios 사용해서 API와 연결
import styles from "./Categories.module.css";

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
      <form onSubmit={onSubmit} className={styles.search_bar}>
        <input
          className={styles.search_bar_input}
          type="search"
          value={search}
          placeholder="eg.체리 스위치"
          onChange={onChange}
        />
        <button type="submit" className={styles.search_icon}>
          검색
        </button>
      </form>
    </div>
  );
}

export default Category;
