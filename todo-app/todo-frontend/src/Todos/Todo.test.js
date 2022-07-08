import React from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react';
import Todo from './Todo'

afterEach(cleanup)

const testTodo = {
    text: "foo",
}
const testOnClickComplete = () => {}
const testOnClickDelete = () => {}

describe('testing todo component', () => {
    it('Todo component renders without crashing', () => {
        render(<Todo todo={testTodo} onClickComplete={testOnClickComplete} onClickDelete={testOnClickDelete} />)
    })
})
