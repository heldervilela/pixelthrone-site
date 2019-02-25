/**
 * Dependencies
 */
import React from 'react'
import App, { Container } from 'next/app'

/**
 * Internal
 */
import NProgress from '../_components/_utils/nprogress'
import Nav from '../_components/nav';
import Footer from '../_components/footer';

/**
 * Styles
 */
import '../public/styles/layout.scss'

/**
 * Component
 */
export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<Container>
				<Nav/>
				<div className="the-page-content">
					<Component {...pageProps} />
				</div>
				<NProgress />
				<Footer/>
			</Container>
		)
	}
}
