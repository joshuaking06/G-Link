import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from '../helpers/Auth'

const headers = { headers: { Authorization: `Bearer ${Auth.getToken()}` } }

const getGameQuery = (id) => {
	return `query{
		getGame(id:${id}){
			_id
			id
			name
            cover{ url }
            messageBoard { _id subject content author { _id username}}
		}
	}`
}

const postMutation = (subject, content, id) => {
	return `mutation{ createForumPost(postInput:{
    content: "${content}", 
    subject:"${subject}"
    gameId: ${id}
    }){ name _id id messageBoard { _id subject } }}`
}

const MessageBoard = (props) => {
	const [ game, setGame ] = useState({})

	useEffect(() => {
		axios
			.post('/api/graphql', { query: getGameQuery(props.match.params.id) })
			.then((data) => {
				setGame(data.data.data.getGame)
			})
			.catch((err) => console.log(err))
	}, [])

	const submitPost = () => {
		const sub = 'the first post subject'
		const cont = 'the story of my first post content'
		const str = postMutation(sub, cont, props.match.params.id)
		axios
			.post('/api/graphql', { query: str }, headers)
			.then((res) => {
				console.log(res.data)
			})
			.catch((err) => console.log(err))
	}
	if (game) console.log(game)
	return (
		<div>
			<h1>Hello world</h1>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Hero title</h1>
						<h2 className="subtitle">Hero subtitle</h2>
					</div>
				</div>
			</section>
			<div className="button" onClick={submitPost}>
				Hello there
			</div>
		</div>
	)
}

export default MessageBoard
