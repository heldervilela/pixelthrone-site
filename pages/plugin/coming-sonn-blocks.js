/**
 * Dependencies
 */
import Head from 'next/head'
import {Fragment} from "react";

/**
 * Internal
 */
import MenuCTA from '../../_components/_utils/menu-cta'
import Hero from '../../_components/plugin--csblocks/hero'
import Intro from '../../_components/plugin--csblocks/intro'
import Demos from '../../_components/plugin--csblocks/demos'
import HowItWorks from '../../_components/plugin--csblocks/how-it-works'
import Features from '../../_components/plugin--csblocks/features'
import Prices from '../../_components/plugin--csblocks/prices'

/**
 * Styles
 */
import '../../static/styles/pages/plugin--coming-sonn-blocks.scss'

/**
 * Config
 */
const downloadInfo = {
	direct:'https://downloads.wordpress.org/plugin/coming-soon-blocks.1.3.0.zip',
	site:'https://wordpress.org/plugins/coming-soon-blocks'
};

/**
 * Component
 */
export default () => (
	<Fragment>
		<Head>
			<title>Coming Soon & Maintenance Page for WordPress Block Editor ( Gutenberg )</title>
		</Head>

		<MenuCTA downloadInfo={downloadInfo}/>
		<Hero/>
		<Intro/>
		<Demos/>
		<HowItWorks/>
		<Features/>
		<Prices downloadInfo={downloadInfo}/>
	</Fragment>
)
