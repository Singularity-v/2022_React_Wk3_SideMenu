import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";
import React, { useState } from 'react';

const { Header, Content, Footer } = Layout;



function Home() {

  const [isOnTouch, setIsOnTouch] = useState(false);
  console.log(setIsOnTouch);

  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title="NORDIC NEST Shopping Cart"/>
      </Header>
      <Content className="layout-content">
        <NavBar
            navCtrol={isOnTouch}
        />
        <HamMenu 
            onClick={()=>setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch} 
                  
        />
        <ProductList products={products}/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Home;