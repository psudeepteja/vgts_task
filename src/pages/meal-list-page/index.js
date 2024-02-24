import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { endpoint } from "../../endpoint";
import { mealFetch } from "../../feature/asyncThunk";
import MealCard from "../../componnets/mealListingCard";
import Loading from "../../componnets/loading";
import Error from "../../componnets/error";

const MealListingPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { meals, isLoading, isError } = useSelector((state) => state.meals);
  const params = location.search.split("?s=").join("");

  const fetchData = () => {
    dispatch(mealFetch(`${endpoint.search}?s=${params}`));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {isLoading && <Loading isLoading={isLoading} />}
      {!isLoading && !isError && <MealCard meals={meals} />}
      {isError && <Error />}
    </div>
  );
};

export default MealListingPage;
