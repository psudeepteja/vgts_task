import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryFetch } from "../../feature/asyncThunk";
import { endpoint } from "../../endpoint";
import CategoryCard from "../../componnets/categoryCard";
import Loading from "../../componnets/loading";
import Error from "../../componnets/error";

const Home = () => {
  const dispatch = useDispatch();
  const { category, isLoading, isError } = useSelector(
    (state) => state.category
  );
  console.log(category);

  const fetchData = () => {
    dispatch(categoryFetch(endpoint.category));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {isLoading && <Loading isLoading={isLoading} />}
      {!isLoading && !isError && <CategoryCard category={category} />}
      {isError && <Error />}
    </div>
  );
};

export default Home;
