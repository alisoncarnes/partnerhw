// console.log('movies')

class App extends React.Component {
  state = {
    name: '',
    year: 0,
    img: '',
    movies: []
  }

  componentDidMount = () => {
    axios
      .get('/movies')
      .then((response) => {
        this.setState({
          movies: response.data
        })
      })
  }
  deleteMovies = (event) => {
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
        { name: '',
          img: '',
          movies: response.data
        })
      )
  }
  updateMovies = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
      .put('/movies/' + id, this.state)
      .then(response => {
        this.setState({
          movies: response.data,
          name: '',
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

        </form>

        <h3>List of Movies</h3>
        <ul>
        { this.state.movies.map(movies => { return (
          <li key={movies._id}>{movies.title}<br />
            <img src={movies.img} alt={movies image}/>

            <button value={movies._id} onClick={this.deleteMovies}>DELETE MOVIE</button>

            <details>

            <summary>Edit this Movie</summary>
              <form onSubmit={this.updateMovies} id={movies._id}>
                <label htmlFor="title">Title</label><br />
                <input type="text" id="name" onChange={this.handleChange}/><br />

                <label htmlFor="year">Year</label><br />
                <input type="number" id="year" onChange={this.handleChange}/><br />

                <label htmlFor="img">Image</label><br />
                <input type="text" ="img" onChange={this.handleChange}/><br />

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
