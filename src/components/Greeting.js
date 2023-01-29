import React from "react"
import Output from "./Output"

const Greeting = () => {
	const [text, setText] = React.useState(false)

	const textHandler = () => {
		setText(true)
	}

	return (
		<div>
			<h1>Hello, world!</h1>
			{!text && <Output>Greetings to all that are in it!</Output>}
			{text && <Output>Changed!</Output>}
			<button onClick={textHandler}>Show text</button>
		</div>
	)
}

export default Greeting
