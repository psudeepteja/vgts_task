import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearShippingDetails } from "../../feature/slices/checkoutSlice";
import { clearMealData } from "../../feature/slices/mealDataSlice";
import { clearMeals } from "../../feature/slices/mealsSlice";

const { Title, Text } = Typography;

export default function Order() {
  const { shippingDetails } = useSelector((state) => state.checkout);
  const { mealData } = useSelector((state) => state.mealData);

  const dispatch = useDispatch();
  const { firstName } = shippingDetails;
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(clearShippingDetails());
    dispatch(clearMeals());
    dispatch(clearMealData());
    navigate("/");
  };

  return (
    <Row justify="center" style={{ marginTop: "50px" }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Card
          style={{ padding: "20px", borderRadius: "8px", textAlign: "center" }}
        >
          <Title level={2} style={{ marginBottom: "20px" }}>
            Order Successful!
          </Title>
          <Text>
            <Text type="primary" style={{ fontSize: "20px" }}>
              {firstName},
            </Text>{" "}
            Your order has been successfully placed.
          </Text>
          <div style={{ marginTop: "20px" }}>
            <Title level={3}>Order Details:</Title>
            <Text>Order Number: DB3456789</Text>
            <br />
            <Text>Item Name: {mealData.strMeal}</Text>
          </div>
          <Button
            type="primary"
            style={{ marginTop: "20px" }}
            onClick={handleClick}
          >
            Home
          </Button>
        </Card>
      </Col>
    </Row>
  );
}
