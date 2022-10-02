import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import lighting from "../json/lighting.json"
import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";
import React, { useState } from 'react';

const { Header, Content, Footer } = Layout;

function Lighting() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  console.log(setIsOnTouch);
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="Lighting" />
      </Header>
      <Content className="layout-content">
        <NavBar
            navCtrol={isOnTouch}
        />
        <HamMenu 
            onClick={()=>setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch} 
                  
        />
        <ProductList products={lighting} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Lighting;