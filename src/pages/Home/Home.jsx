import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getProjects } from '../../actions/projectActions'

const Home = ({  }) => {
	return <h1>Home</h1>
}

const mapDispatchToProps = {
	getProjects
}

export default connect(null, mapDispatchToProps)(Home)
