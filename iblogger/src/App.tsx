import { createContext, ReactNode } from "react";
import { Layout, Flex } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/Header";
import logo_slogan from "../public/assets/logo_slogan.svg";
import Home from "./pages/Home";

const RootLayout = createContext("");
const { Header, Footer, Content } = Layout;

function App({ children }: { children: ReactNode }) {
  return (
    <RootLayout.Provider value="">
      <BrowserRouter>
        <Layout>
          <Header className="bg-white">
            <Headers />
          </Header>
          <Content>{children}</Content>
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
      </BrowserRouter>
    </RootLayout.Provider>
  );
}

export default function AppRoutes() {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </App>
  );
}
