import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getPostsQuery = (gameId, postId) => {
	return `query{ showForumPost(
		gameId: ${gameId}, 
		postId:"${postId}"
		){ _id content subject author { _id } }}`
}

const MessageBoardShow = (props) => {
	useEffect(() => {
		console.log(getPostsQuery(props.match.params.id, props.match.params.postId))
		axios
			.post('/api/graphql', {
				query: getPostsQuery(props.match.params.id, props.match.params.postId)
			})
			.then((res) => {
				console.log(res.data.data.showForumPost)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<div>
			<section className="hero">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Forums</h1>
					</div>
				</div>
			</section>
		</div>
	)
}

export default MessageBoardShow
