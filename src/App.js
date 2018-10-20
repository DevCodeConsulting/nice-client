import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import './App.scss';
import { getBooks, getBook } from './api/graphqlClient';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      book: {},
      search: ""
    }
  }
  componentDidMount() {
    this.fetchBooks()
  }
  async fetchBooks() {
    let books = await getBooks(this.state.search, ["id", "title"])
    books = books.data.books
    this.setState({ books })
  }
  async fetchBook() {
    let book = await getBook(1, ["id", "title"])
    book = book.data.book
    this.setState({ book })
  }

  handleBooks(searchTerm) {
    this.setState({ search: searchTerm })
  }

  render() {
    return (
      <div className="App">
        {this.state.books.map(book => (
          <h2 key={book.id}>{book.title}</h2>
        ))}
        <input onChange={e => this.handleBooks(e.target.value)} onKeyUp={e => debounce(this.fetchBooks.bind(this), 1000)() }value={this.state.search} type="text"></input>
        <button onClick={e => this.fetchBooks()} >Search</button>
      </div>
    )
  }
}

export default App;
