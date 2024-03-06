// не переписывать
// данный файл сгенерирован автоматически

const src = path.join(__dirname, './src')

module.exports = ({ dev }) => ({
	plugins: [
		new module_federation({
			name: 'builder',
			filename: 'remote_entry.js',

			shared: {
				'react': { singleton: true },
				'react-dom': { singleton: true },
			},
		}),
	],

	resolve: {
		alias: {
			'~api': src + 'entities/api',
			'~consts': src + 'entities/consts',
			'~entities': src + 'entities',
			'~features': src + 'features',
			'~libs': src + 'shared/libs',
			'~store': src + 'processes/store',
			'~styles': src + 'shared/styles',
			'~types': src + 'entities/types',
			'~ui': src + 'shared/ui',
			'~widgets': src + 'widgets',
		},
	},
})
