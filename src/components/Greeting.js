import React from "react"

const Greeting = () => {
	const [text, setText] = React.useState(false)

	const textHandler = () => {
		setText(true)
	}

	return (
		<div>
			<h1>Hello, world!</h1>
			{!text && <p>Greetings to all that are in it!</p>}
			{text && <p>Changed!</p>}
			<button onClick={textHandler}>Show text</button>
		</div>
	)
}

export default Greeting
