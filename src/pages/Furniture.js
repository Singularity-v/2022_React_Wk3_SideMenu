import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import furniture from "../json/furniture.json"
import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";
import React, { useState } from 'react';

const { Header, Content, Footer } = Layout;

function Furniture() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    console.log(setIsOnTouch);
    return (
        <Layout className="container main-layout">
        <Header className="layout-header">
            <AppHeader title="Furniture" />
        </Header>
        <Content className="layout-content">
            <NavBar
                navCtrol={isOnTouch}
            />
            <HamMenu 
                onClick={()=>setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch} 
                    
            />
            <ProductList products={furniture}/>
        </Content>
        <Footer className="layout-footer">
            <AppFooter/>  
        </Footer>      
        </Layout>
    );
}

export default Furniture;