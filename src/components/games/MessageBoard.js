import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../helpers/Auth'

const headers = { headers: { Authorization: `Bearer ${Auth.getToken()}` } }

const getPostsQuery = (id) => {
	return `query{
		getGame(id:${id}){
			_id
			id
			name
            cover{ url }
            messageBoard { _id subject content author { _id username }}
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
			.post('/api/graphql', { query: getPostsQuery(props.match.params.id) })
			.then((data) => {
				setGame(data.data.data.getGame)
			})
			.catch((err) => console.log(err))
	}, [])

	const submitPost = () => {
		const sub = 'the second post subject'
		const cont = 'the story of my second post content'
		const str = postMutation(sub, cont, props.match.params.id)
		axios
			.post('/api/graphql', { query: str }, headers)
			.then((res) => {
				console.log(res.data)
			})
			.catch((err) => console.log(err))
	}

	console.log(game)
	if (game)
		return (
			<div>
				<section className="hero">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">Forums</h1>
							<h2 className="subtitle">{game.name}</h2>
						</div>
					</div>
				</section>
				<div className="button" onClick={submitPost}>
					Submit post
				</div>
				{game.messageBoard &&
					game.messageBoard.map((post) => (
						<Link
							to={`/games/${props.match.params.id}/forums/${post._id}`}
							className="forum-post"
							key={post._id}
						>
							{post.subject}
						</Link>
					))}
			</div>
		)
	return <h1>Loading...</h1>
}

export default MessageBoard
