import { createContext, ReactNode } from "react";
import { Layout, Flex } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/Header";
import logo_slogan from "./assets/logo_slogan.svg";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./components/Post";

const RootLayout = createContext("");
const { Header, Footer, Content } = Layout;

function App({ children }: { children: ReactNode }) {
  return (
    <RootLayout.Provider value="">
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
    </RootLayout.Provider>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
