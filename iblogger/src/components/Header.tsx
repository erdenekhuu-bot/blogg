import { Flex, Dropdown } from "antd";
import logo from "../../public/assets/logo.svg";
import { useState } from "react";
import {
  SearchOutlined,
  CommentOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import heart from "../../public/assets/u_heart.svg";
import { items } from "../data/drop-down-data";
const Headers = function () {
  return (
    <Flex align="end" justify="space-around">
      <img src={logo} alt="" width={91.62} height={46} />
      <Space.Compact size="large" style={{ width: "40%" }}>
        <Input
          addonAfter={<SearchOutlined />}
          placeholder="input search text"
          allowClear
        />
      </Space.Compact>
      <Flex gap={10}>
        <img src={heart} alt="" />
        <Dropdown menu={{ items }}>
          <Button type="primary" size="large" className="bg-[#E86B02]">
            Post
            <CommentOutlined />
          </Button>
        </Dropdown>
        <Button block size="large">
          Профайл <UserAddOutlined />
        </Button>
      </Flex>
    </Flex>
  );
};
export default Headers;
