import React from 'react'
import Head from '../components/common/Head'
import Header from '../components/common/Header'
import IntroSection from '../components/index/IntroSection'
import SpecializationSection from '../components/index/SpecializationSection'
import '../assets/style/reset.css'

const IndexPage = () => {
    return (
        <React.Fragment>
            <Head />
            <Header />
            <IntroSection />
            <SpecializationSection />
        </React.Fragment>
    )
}

export default IndexPage