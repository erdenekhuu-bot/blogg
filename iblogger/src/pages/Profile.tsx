import { Layout, Flex, Card, Typography } from "antd";
import no_posts from "../assets/no_posts.svg";

const { Content } = Layout;

export default function Profile() {
  return (
    <Layout className="min-h-[100vh] bg-white">
      <Flex gap="middle">
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          <Flex gap="middle" justify="center">
            <Typography className="font-semibold text-3xl">Erdenee</Typography>
          </Flex>
        </Card>
        <Layout>
          <Content>
            <img src={no_posts} alt="" />
          </Content>
        </Layout>
      </Flex>
    </Layout>
  );
}
