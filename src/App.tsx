import React from "react"
import Header from "components/Header/Header"
import TopBlock from "components/TopBlock/TopBlock"
import ServicesBlock from "components/ServicesBlock/ServicesBlock"
import AboutBlock from "components/AboutBlock/AboutBlock"
import ClientsBlock from "components/ClientsBlock/ClientsBlock"
import ReviewsBlock from "components/ReviewsBlock/ReviewsBlock"
import ContactsBlock from "components/ContactsBlock/ContactsBlock"
import Footer from "components/Footer/Footer"

function App() {
    return (
        <>
            <Header />
            <TopBlock />
            <ServicesBlock />
            <AboutBlock />
            <ClientsBlock />
            <ReviewsBlock />
            <ContactsBlock />
            <Footer />
        </>
    )
}

export default App
