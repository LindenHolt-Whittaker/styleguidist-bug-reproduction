const { version } = require('./package');

module.exports = {
	components: 'src/components/**/[A-Z]*.js',
	pagePerSection: true,
	exampleMode: 'expand',
	usageMode: 'expand',
	ribbon: {
		url: 'https://github.com/styleguidist/react-styleguidist',
	},
	version,
	sections: [
		{ 
			name: 'Read me (.md files)',
			sections: [
				{
					name: 'Test 1',
					description: 'One',
					content: `src/components/Test1/Readme.md`,
				},
				{
					name: 'Test 2',
					description: 'Two',
					content: `src/components/Test2/Readme.md`,
				},
				{
					name: 'Test 3',
					description: 'Three',
					content: `src/components/Test3/Readme.md`,
				},
				{
					name: 'Test 4',
					description: 'Four',
					content: `src/components/Test4/Readme.md`,
				},
			],
			sectionDepth: 2,
		},
		{
			name: 'Components (bad work around)',
			components: [
        `src/components/Test1/index.js`,
        `src/components/Test2/index.js`,
        `src/components/Test3/index.js`,
				`src/components/Test4/index.js`,
			],
			sectionDepth: 2,
		}
	],
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
			],
		},
	},
};
