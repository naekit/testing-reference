import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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

	test("initial component has unchanged text", () => {
		// Arrange
		render(<Greeting />)
		// Act
		// ...nothing to do here
		// Assert
		const outputElement = screen.getByText(
			"Greetings to all that are in it!"
		)
		expect(outputElement).toBeInTheDocument()
	})

	test("text changes after button click", () => {
		// Arrange
		render(<Greeting />)
		// Act
		const buttonElement = screen.getByRole("button")
		userEvent.click(buttonElement)
		// Assert
		const outputElement = screen.getByText("Changed!")
		expect(outputElement).toBeInTheDocument()
	})

	test("does not render greeting if button is clicked", () => {
		// Arrange
		render(<Greeting />)
		// Act
		const buttonElement = screen.getByRole("button")
		userEvent.click(buttonElement)
		// Assert
		const outputElement = screen.queryByText(
			"Greetings to all that are in it!"
		)
		expect(outputElement).toBeNull()
	})
})
