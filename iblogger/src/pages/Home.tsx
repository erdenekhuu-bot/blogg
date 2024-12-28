import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import axios from "axios";
import type { MenuProps } from "antd";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetching = async function () {
    try {
      const response = await axios.get(
        "http://192.168.0.102:3000/api/titlelist"
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  const generateMenuItems = (data: any[]): MenuItem[] => {
    return data.map((item) => ({
      key: item.id.toString(),
      label: item.title,
      children: item.items.map((subItem: any) => ({
        key: subItem.id.toString(),
        label: subItem.content,
      })),
    }));
  };

  const menuItems = generateMenuItems(posts);

  return (
    <Layout className="min-h-[100vh] bg-white">
      <Sider width={300} className="ml-10 mt-4">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Content>{/* Your content here */}</Content>
      </Layout>
    </Layout>
  );
}
