import React from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;