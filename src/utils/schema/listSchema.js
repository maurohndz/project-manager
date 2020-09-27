import { v4 as uuidv4 } from 'uuid'

const listSchema = (title) => {
	return {
		id : uuidv4(),
		title : title,
		cards : [],
	}
}

export default listSchema