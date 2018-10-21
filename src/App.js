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
  async fetchBooks(value = '') {
    console.log(value)
    let books = await getBooks(value, ["id", "title"])
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
        <div class='content-container-outer'>
          <div class='content-container'>
            <h1>GraphQL demo</h1>
            <input
              placeholder='Search the magic'
              onChange={e => this.handleBooks(e.target.value)}
              onKeyUp={e => debounce(this.fetchBooks.bind(this, e.target.value), 300)()}
              value={this.state.search}
              type="search"
              autoFocus={true} />
            <ul>
            {this.state.books.map(book => (
              <li>
                  <h2 key={book.id}>{book.title}</h2>
                  <p>{book.author.name}</p>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
