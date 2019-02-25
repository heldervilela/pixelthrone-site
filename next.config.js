const path              = require( 'path' );
const withSass = require('@zeit/next-sass');

module.exports = withSass({
	sassLoaderOptions: {
		data: '@import "'+path.resolve( __dirname, 'public/styles/_common.scss' )+'";\n',
	}
});
