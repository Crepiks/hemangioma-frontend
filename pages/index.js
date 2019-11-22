import React from 'react'
import Head from '../components/common/Head'
import Header from '../components/common/Header'
import IntroSection from '../components/index/IntroSection'
import '../assets/style/reset.css'

const IndexPage = () => {
    return (
        <React.Fragment>
            <Head />
            <Header />
            <IntroSection />
        </React.Fragment>
    )
}

export default IndexPage