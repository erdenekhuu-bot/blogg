import { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import axios from "axios";
import type { MenuProps } from "antd";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

export const ADDRESS = "192.168.0.102";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const fetching = async function () {
    try {
      const response = await axios.get(`http://${ADDRESS}:3000/api/titlelist`, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });

      setPosts(response.data);
    } catch (error) {
      console.log(error);
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

  const breadcrumbItems = [
    { title: "Home" },
    { title: "List" },
    { title: "App" },
  ];

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
        <Content>
          <Breadcrumb className="m-10" items={breadcrumbItems} />
        </Content>
      </Layout>
    </Layout>
  );
}
