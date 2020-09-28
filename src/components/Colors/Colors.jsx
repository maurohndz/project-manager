import React, { useEffect, useState } from 'react'

import { getColors } from '../../utils/colors'

import { Container, Item } from './styles'

const Colors = ({ getColor, select }) => {
	const [colors] = useState(getColors)

	return (
		<Container>
			{colors.map(({key, value}) => {
				return (
					<Item 
						color={value}
						onClick={() => getColor(key)}
						key={key}
						select={(select === key)}
					/>
				)
			})}
		</Container>
	)
}

export default Colors