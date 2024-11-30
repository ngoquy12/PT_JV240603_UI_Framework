import { Breadcrumb, Col, Dropdown, Row, Space } from "antd";
import React from "react";
import { DownOutlined } from "@ant-design/icons";

export default function DemoAntd() {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />

      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Click me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>

      <Row>
        <Col span={24}>Col 24</Col>
      </Row>
      <Row>
        <Col span={12}>Col 12</Col>
        <Col span={12}>Col 12</Col>
      </Row>
      <Row>
        <Col span={6}>Col 6</Col>
        <Col span={6}>Col 6</Col>
        <Col span={6}>Col 6</Col>
        <Col span={6}>Col 6</Col>
      </Row>
    </div>
  );
}
