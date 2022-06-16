import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import "../css/header.css";

function PageLayout() {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}

export default PageLayout;