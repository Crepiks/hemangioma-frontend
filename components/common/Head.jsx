import React from 'react'
import Head from 'next/head'
import AppleIcon57 from '../../assets/favicon/apple-icon-57x57.png'
import AppleIcon60 from '../../assets/favicon/apple-icon-60x60.png'
import AppleIcon72 from '../../assets/favicon/apple-icon-72x72.png'
import AppleIcon76 from '../../assets/favicon/apple-icon-76x76.png'
import AppleIcon114 from '../../assets/favicon/apple-icon-114x114.png'
import AppleIcon120 from '../../assets/favicon/apple-icon-120x120.png'
import AppleIcon144 from '../../assets/favicon/apple-icon-144x144.png'
import AppleIcon152 from '../../assets/favicon/apple-icon-152x152.png'
import AppleIcon180 from '../../assets/favicon/apple-icon-180x180.png'
import AndroidIcon192 from '../../assets/favicon/android-icon-192x192.png'
import Favicon32 from '../../assets/favicon/favicon-32x32.png'
import Favicon96 from '../../assets/favicon/favicon-96x96.png'
import Favicon16 from '../../assets/favicon/favicon-16x16.png'
import manifest from '../../assets/favicon/manifest.json'
import MsIcon from '../../assets/favicon/ms-icon-144x144.png'

const HeadComponent = () => {
    return (
        <Head>
            <title>Hemangioma.kz | Лечение гемангиомы в Казахстане</title>
            <meta name="description" content="Ведущая клиника по лечению гемангиомы в Казахстане" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap&subset=cyrillic" rel="stylesheet" />
            <link rel="apple-touch-icon" sizes="57x57" href={AppleIcon57} />
            <link rel="apple-touch-icon" sizes="60x60" href={AppleIcon60} /> 
            <link rel="apple-touch-icon" sizes="72x72" href={AppleIcon72} />
            <link rel="apple-touch-icon" sizes="76x76" href={AppleIcon76} />
            <link rel="apple-touch-icon" sizes="114x114" href={AppleIcon114} />
            <link rel="apple-touch-icon" sizes="120x120" href={AppleIcon120} />
            <link rel="apple-touch-icon" sizes="144x144" href={AppleIcon144} />
            <link rel="apple-touch-icon" sizes="152x152" href={AppleIcon152} />
            <link rel="apple-touch-icon" sizes="180x180" href={AppleIcon180} />
            <link rel="icon" type="image/png" sizes="192x192" href={AndroidIcon192} />
            <link rel="icon" type="image/png" sizes="32x32" href={Favicon32} />
            <link rel="icon" type="image/png" sizes="96x96" href={Favicon96} />
            <link rel="icon" type="image/png" sizes="16x16" href={Favicon16} />
            <link rel="manifest" href={manifest} />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content={MsIcon} />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}

export default HeadComponent