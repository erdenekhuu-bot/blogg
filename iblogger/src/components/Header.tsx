import { Button, Input, Space, Dropdown, Modal } from "antd";
import {
  SearchOutlined,
  CommentOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import heart from "../assets/u_heart.svg";
import { useDropdownItems } from "../data/drop-down-data";
import logo from "../assets/logo.svg";
import { Flex } from "antd";
import { useState } from "react";

const Headers = function () {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const items = useDropdownItems(showModal);

  return (
    <Flex align="end" justify="space-around">
      <img
        src={logo}
        alt="Logo"
        width={91.62}
        height={46}
        className="hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      />
      <Space.Compact size="large" style={{ width: "40%" }}>
        <Input
          addonAfter={<SearchOutlined />}
          placeholder="input search text"
          allowClear
        />
      </Space.Compact>
      <Flex gap={10}>
        <img src={heart} alt="Heart" />
        <Dropdown menu={{ items }}>
          <Button type="primary" size="large" className="bg-[#E86B02]">
            Post
            <CommentOutlined />
          </Button>
        </Dropdown>
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          {modalText}
        </Modal>
        <Button
          block
          size="large"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Профайл <UserAddOutlined />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Headers;
