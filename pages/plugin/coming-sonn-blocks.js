/**
 * Dependencies
 */
import Head from 'next/head'
import {Fragment} from "react";

/**
 * Internal
 */
import Header from '../../_components/plugin--csblocks/header.js'

/**
 * Styles
 */
import '../../static/styles/pages/plugin--coming-sonn-blocks.scss'

/**
 * Component
 */
export default () => (
	<Fragment>
		<Head>
			<title>Coming Soon & Maintenance Page for WordPress Block Editor ( Gutenberg )</title>
		</Head>

		<Header/>
	</Fragment>
)
