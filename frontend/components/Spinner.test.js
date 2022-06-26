// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'

test('sanity', () => {
  expect(true).toBe(true)
})

test("Spinner component renders", () =>{
  render(<Spinner />)
})

test("Spinner component renders text when value is true", () => {
  render(<Spinner on={true}/>)
  const renderValue = screen.queryByText(/Please wait.../i)
  expect(renderValue).not.toBeNull()
})

test("Spinner component does not render text when value is false", () => {
  render(<Spinner on={false}/>)
  const renderValue = screen.queryByText(/Please wait.../i)
  expect(renderValue).toBeNull()
})

