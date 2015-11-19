import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    // injected by connect() call
    const {dispatch, visibleTodos, visibilityFilter} = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))}
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(completeTodo(index))}
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))}
        />
      </div>
    )
  }
}

function select(state) {
  return {
    visibleTodos: filterTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

function filterTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed)
  case VisibilityFilters.SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed)
  }
}

export default connect(select)(App)
