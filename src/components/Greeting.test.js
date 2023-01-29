import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test("greeting has hello world text", () => {
	// Arrange
	render(<Greeting />)
	// Act
	const greetingElement = screen.getByText(/hello, world!/i)
	// Assert
	expect(greetingElement).toBeInTheDocument()
})
