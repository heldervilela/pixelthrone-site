const path     = require( 'path' );
const withSass = require( '@zeit/next-sass' );

module.exports = withSass( {
	sassLoaderOptions: {
		data: '@import "' + path.resolve( __dirname, 'static/styles/_common.scss' ) + '";\n',
	},
	webpack(config, options) {
		config.module.rules.push(
			{
				test: /\.svg$/,
				use: [
					{ loader: "babel-loader" },
					{
						loader: "react-svg-loader",
						options: {
							jsx: true // true outputs JSX tags
						}
					}
				]
			}
		);
		return config
	}
} );


//
// conf.module.rules.push(

// );
