const colors = {
	blueSpace: '222831',
	blueMonday: '383e56',
	purpleDark: '251F44',
	greenOcean: '0f4c75',
	royaleBlue: '0566dd',
	cherryDark: '900c3f',
	cherry: 'c70039',
	pinkCherry: 'e7305b',
	pinkLight: 'e8505b',
	paleYellow: 'fccd4d'
}

export const getColor = (key) => colors[key]

export const getColors = () => {
	let names = Object.keys(colors)
	let values = Object.values(colors)
	let fullColors = []

	names.map((name, index) => {
		fullColors.push({
			key: name,
			value: values[index]
		})
	})

	return fullColors
}

