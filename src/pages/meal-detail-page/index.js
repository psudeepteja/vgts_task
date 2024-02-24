import { useSelector } from "react-redux";
import MealDetailCard from "../../componnets/mealDetailCard";

export default function MealDetailPage() {
  const { mealData } = useSelector((state) => state.mealData);

  return (
    <div style={{ padding: "20px" }}>
      <MealDetailCard mealData={mealData} />
    </div>
  );
}
