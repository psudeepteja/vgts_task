import React from "react";
import { Card, Col, Row, Image, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mealDataAction } from "../feature/slices/mealDataSlice";

export default function MealCard({ meals }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(mealDataAction(item));
    navigate(`/meal-detail-page?s=${item.strMeal.toLowerCase()}`);
  };

  if (meals.meals === null) {
    return (
      <Typography.Title level={4} style={{ textAlign: "center" }}>
        No Meals Found
      </Typography.Title>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      {meals?.meals?.map((item) => (
        <Col key={item.idMeal} xs={24} sm={12} md={8} lg={6}>
          <Card
            style={{ marginBottom: "16px" }}
            cover={
              <Image
                src={item.strMealThumb}
                alt={item.strMeal}
                preview={false}
              />
            }
            onClick={() => {
              handleClick(item);
            }}
          >
            <Typography.Title level={4}>{item.strMeal}</Typography.Title>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
