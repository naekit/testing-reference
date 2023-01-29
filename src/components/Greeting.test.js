import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe("Greeting component", () => {
	test("greeting has hello world text", () => {
		// Arrange
		render(<Greeting />)
		// Act
		// ...nothing to do here
		// Assert
		const greetingElement = screen.getByText("Hello, world!")
		expect(greetingElement).toBeInTheDocument()
	})
})
