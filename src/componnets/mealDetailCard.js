import React from "react";
import { Row, Col, Card, Image, Button, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const MealDetailCard = ({ mealData }) => {
  const navigate = useNavigate();
  const steps = mealData.strInstructions.split("\r\n");
  const ingredients = Array.from({ length: 20 }, (_, i) => i + 1).map(
    (index) => {
      const ingredient = mealData[`strIngredient${index}`];
      const measure = mealData[`strMeasure${index}`];

      return (
        ingredient &&
        measure && <li key={index}>{`${measure} ${ingredient}`}</li>
      );
    }
  );

  return (
    <Row gutter={16}>
      <Col xs={24} md={12}>
        <Card>
          <Image
            src={mealData.strMealThumb}
            alt={mealData.strMeal}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            preview={false}
          />
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card>
          <div>
            <Title level={2}>{mealData.strMeal}</Title>
            <Title level={3}>Instructions:</Title>
            {steps.map((step, index) => (
              <Text key={index}>{step}</Text>
            ))}
            <Title level={3}>Ingredients:</Title>
            <ul>
              {" "}
              <Text>{ingredients}</Text>
            </ul>
            <Button
              type="primary"
              onClick={() => {
                navigate("/checkout");
              }}
              style={{ margin: "20px 0px" }}
            >
              Checkout
            </Button>
            <br />
            YouTube:{" "}
            <Link to={mealData.strYoutube}> {mealData.strYoutube}</Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default MealDetailCard;
