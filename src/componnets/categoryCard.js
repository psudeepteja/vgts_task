import React from "react";
import { Card, Row, Col, Image } from "antd";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/meal-list-page?s=${item.strCategory.toLowerCase()}`);
  };

  return (
    <Row gutter={[16, 16]}>
      {category?.categories?.map((item) => (
        <Col
          key={item.idCategory}
          xs={24}
          sm={12}
          md={8}
          lg={6}
          onClick={() => handleClick(item)}
        >
          <Card style={{ marginBottom: "16px" }}>
            <Image
              src={item.strCategoryThumb}
              alt={item.strCategory}
              preview={false}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ marginTop: "8px", textAlign: "center" }}>
              <span>{item.strCategory}</span>
              <br />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
