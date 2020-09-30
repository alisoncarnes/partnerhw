class App extends React.Component {
  state = {
    title: '',
    year: '',
    img: '',
    movies: []
  }
  componentDidMount = () => {
    axios
      .get('/movies')
      .then(response => {
        this.setState({
          movies: response.data
        })
      })
  }
  deletedMovies = (event) => {
    axios
      .delete('/movies/' + event.target.value)
      .then(response => this.setState({movies: response.data}))
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    axios
      .post('/movies', this.state)
      .then(response => this.setState(
        { title: '',
          year: '',
          img: '',
          movies: response.data
        })
      )
  }
  updatedMovie = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
      .put('/movies/' + id, this.state)
      .then(response => {
        this.setState({
          movies: response.data,
          title: '',
          year: '',
          img: ''
        })
      })
  }
  render = () => {
    return (
      <div>
      <h2>Create Movie</h2>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label><br />
        <input id="title" onChange={this.handleChange} type="text" /><br />
        <label htmlFor="year">Year</label><br />
        <input id="year" onChange={this.handleChange} type="number" /><br />
        <label htmlFor="img">Image</label><br />
        <input id="img" type="text" onChange={this.handleChange} /><br />
        <input type="submit" value="Add Movie" />
      </form>

        <h3>List of Movies</h3>
        <ul>
        { this.state.movies.map(movies => { return (
          <li key={movies._id}>{movies.title}<br />
            {movies.year}
            <img src={movies.img} alt={movies.title}/><br/><br/>
            <button value={movies._id} onClick={this.deletedMovies}>DELETE MOVIE</button>
            <details>
            <summary>Edit this Movie</summary>
              <form id={movies._id} onSubmit={this.updatedMovie}>
                <label htmlFor="title">Title</label><br />
                <input
                type="text"
                id="title"
                onChange={this.handleChange}
                value={this.state.title}
                /><br />
                <label htmlFor="year">Year</label><br />
                <input
                type="number"
                id="year"
                onChange={this.handleChange}
                value={this.state.year}
                /><br />
                <label htmlFor="img">Image</label><br />
                <input
                type="text"
                id="img"
                onChange={this.handleChange}
                value={this.state.img}
                /><br />
                <input type="submit" value="Update Movie" />
              </form>
            </details>
          </li>
        )})}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.querySelector("main")
)
