import { Layout } from 'antd';
import { useParams } from 'react-router-dom';

import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";
import React, { useState } from 'react';

const { Header, Content, Footer } = Layout;

function Product() {
   const { productId } = useParams();

   const product = products.find(
      (x) => x.id === productId
   );
   const [isOnTouch, setIsOnTouch] = useState(false);
   console.log(setIsOnTouch);
   return (
      <Layout className="container main-layout">
         <Header className="layout-header">
            <AppHeader title="Product Detail"/>
         </Header>
         <Content className="layout-content">
            <NavBar
                navCtrol={isOnTouch}
            />
            <HamMenu 
                onClick={()=>setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch} 
                    
            />
            <ProductDetail product = {product} />
         </Content>
         <Footer className="layout-footer">
            <AppFooter />
         </Footer>
      </Layout>
   );
}

export default Product;