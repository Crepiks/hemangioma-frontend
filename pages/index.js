import React from 'react'
import Head from '../components/common/Head'
import Header from '../components/common/Header'
import AnimatedBackgroundSection from '../components/index/AnimatedBackgroundSection'
import '../assets/style/reset.css'

const IndexPage = () => {
    return (
        <React.Fragment>
            <Head />
            <Header />
            <AnimatedBackgroundSection />
        </React.Fragment>
    )
}

export default IndexPage