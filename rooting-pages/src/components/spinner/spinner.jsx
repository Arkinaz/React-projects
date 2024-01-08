import React from "react";
import "./spinner.scss";
import { Alert, Flex, Spin } from "antd";
const Spinner = () => {
  return (
    <div id="spinner">
      <div>
        <Flex align="center" gap="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Flex>
      </div>
    </div>
  );
};

export default Spinner;
