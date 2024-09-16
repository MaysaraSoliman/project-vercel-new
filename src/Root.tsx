import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import MainFooter from "./components/Footer/Footer";

export default function Root() {
  return (
    <div className="App">
      <Layout>
        <Header>
           <MainHeader/>
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <MainFooter/>
        </Footer>
      </Layout>
    </div>
  );
}
