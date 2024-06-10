import {screen, render} from '@testing-library/react'
import Contact from '../Contact'
import "@testing-library/jest-dom"

test('should load button inside Contact Component', () => { 
    render(<Contact />)
    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();

 })

 test('should load input inside Contact Component', () => {
    render(<Contact />)
    const input = screen.getByPlaceholderText('Name');

    //Assersion
    expect(input).toBeInTheDocument();
 })

 test('should load 2 input boxes inside Contact Component', () => {
    render(<Contact />)
    const inputBoxes = screen.getAllByRole('textbox');

    //Assersion
    expect(inputBoxes.length).toBe(2);
 })