import React from "react";
import { Row, Col, Card, Form, Input, Button, Typography, Image } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { checkoutValidationSchema } from "../../schema/checkoutValidationSchema";
import { useNavigate } from "react-router-dom";
import { shippingDetailsAction } from "../../feature/slices/checkoutSlice";

const { Title } = Typography;

export default function Checkout() {
  const { mealData } = useSelector((state) => state.mealData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    validationSchema: checkoutValidationSchema,
    onSubmit: (values) => {
      dispatch(shippingDetailsAction(values));
      navigate("/order");
    },
  });

  return (
    <Row justify="center" gutter={16} style={{ marginTop: "50px" }}>
      <Col xs={24} md={2}></Col>
      <Col xs={24} md={14}>
        <Card style={{ padding: "20px", borderRadius: "8px" }}>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Checkout
          </Title>
          <Form onFinish={formik.handleSubmit} layout="vertical">
            <Form.Item
              label="First Name"
              name="firstName"
              validateStatus={formik.errors.firstName ? "error" : ""}
              help={formik.errors.firstName}
            >
              <Input
                placeholder="Enter your first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              validateStatus={formik.errors.lastName ? "error" : ""}
              help={formik.errors.lastName}
            >
              <Input
                placeholder="Enter your last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              validateStatus={formik.errors.email ? "error" : ""}
              help={formik.errors.email}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              validateStatus={formik.errors.phoneNumber ? "error" : ""}
              help={formik.errors.phoneNumber}
            >
              <Input
                placeholder="Enter your phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              validateStatus={formik.errors.address ? "error" : ""}
              help={formik.errors.address}
            >
              <Input
                placeholder="Enter your address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Order
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col xs={24} md={6}>
        <Card style={{ borderRadius: "8px" }}>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Meal Preview
          </Title>
          <div style={{ textAlign: "center" }}>
            <Image
              src={mealData.strMealThumb}
              alt={mealData.strMeal}
              style={{ width: "200px", borderRadius: "8px" }}
              preview={false}
            />
          </div>
          <Title level={4} style={{ marginTop: "20px", textAlign: "center" }}>
            {mealData.strMeal}
          </Title>
        </Card>
      </Col>
      <Col xs={24} md={2}></Col>
    </Row>
  );
}
