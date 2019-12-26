import React from 'react'
import Head from '../components/common/Head'
import Header from '../components/common/Header'
import IntroSection from '../components/index/IntroSection'
import SpecializationSection from '../components/index/SpecializationSection'
import DoctorsSection from '../components/index/DoctorsSection'
import TechnicsSection from '../components/index/TechnicsSection'
import Footer from '../components/common/Footer'
import '../assets/style/reset.css'
import '../assets/style/main.css'

const IndexPage = () => {
    return (
        <React.Fragment>
            <Head />
            <Header />
            <IntroSection />
            <SpecializationSection />
            <DoctorsSection />
            <TechnicsSection />
            <Footer />
        </React.Fragment>
    )
}

export default IndexPage