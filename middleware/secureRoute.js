const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	const authHeader = req.get('Authorization')
	// check for authorization field in header
	if (!authHeader) {
		req.isAuth = false
		return next()
	}
	// split the authorization field to ignore bearer
	const token = authHeader.split(' ')[1]
	if (!token || token === '') {
		req.isAuth = false
		return next()
	}
	// attempt to decode token using secret key
	let decodedToken
	try {
		decodedToken = jwt.verify(token, process.env.SECRET)
	} catch (err) {
		req.isAuth = false
		return next()
	}
	// if token is not set don't authenticate
	if (!decodedToken) {
		req.isAuth = false
		return next()
	}
	// authenticate and attach user id to request
	req.isAuth = true
	req.userId = decodedToken.userId
	next()
}
