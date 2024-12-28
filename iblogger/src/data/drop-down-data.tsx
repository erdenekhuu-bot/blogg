import { HeartOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

export const useDropdownItems = (showModal: () => void): MenuProps["items"] => {
  const navigate = useNavigate();

  return [
    {
      key: "1",
      label: "Миний мэдээлэл",
      icon: <UserOutlined />,
      onClick: () => navigate("/profile"),
    },
    {
      key: "2",
      label: "Таалагдсан",
      icon: <HeartOutlined />,
      onClick: () => navigate("/favorites"),
    },
    {
      key: "3",
      label: "Гарах",
      icon: <LogoutOutlined />,
      onClick: showModal,
    },
  ];
};
