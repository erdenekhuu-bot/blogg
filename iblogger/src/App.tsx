import { createContext } from "react";
import { Layout, Flex } from "antd";
import Headers from "./pages/Header";
import logo_slogan from "../public/assets/logo_slogan.svg";

const RootLayout = createContext("");
const { Header, Footer, Content } = Layout;
function App() {
  return (
    <RootLayout.Provider value="">
      <Layout>
        <Header className="bg-white">
          <Headers />
        </Header>
        <Content>Content</Content>
        <Footer className="border bg-white">
          <Flex align="center" justify="space-around">
            <img src={logo_slogan} alt="" />
            <div>
              <p className="text-lg font-bold">Тусламж</p>
              <p>Хэрэглэх заавар</p>
              <p>Санал хүсэлт</p>
            </div>
            <section>
              <p className="text-lg font-bold">Бидэнтэй холбогдох</p>
              <p>info@jstemplate.net</p>
              <p>+976 99112344</p>
            </section>
          </Flex>
        </Footer>
      </Layout>
    </RootLayout.Provider>
  );
}

export default App;
