import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getGameQuery = (id) => {
	return `query{
		getGame(id:${id}){
			_id
			id
			name
            cover{ url }
            messageBoard { _id subject}
		}
	}`
}

const MessageBoard = (props) => {
	const [ game, setGame ] = useState({})

	useEffect(() => {
		axios
			.post('/api/graphql', { query: getGameQuery(props.match.params.id) })
			.then((data) => {
				console.log(data.data.data.getGame)
				this.setGame(data.data.data.getGame)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<div>
			<h1>Hello world</h1>
		</div>
	)
}

export default MessageBoard
