import { Spin } from "antd";
import "../App.css";

export default function Loading({ isLoading }) {
  return (
    <div className="loading-container">
      <Spin spinning={isLoading} size="large" tip="Loading..."></Spin>
    </div>
  );
}
