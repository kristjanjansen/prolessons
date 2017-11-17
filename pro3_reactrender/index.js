window.h = React.createElement;

const Movie = ({ movie }) => h(
    'div',
    { style: { color: 'red' } },
    movie.title
)

const Movies = ({ movies }) => h(
    'div',
    {},
    [
        h('h1', { key: 'title' }, 'Movies'),
        movies.map((movie, key) => h(Movie, { movie, key }))
    ]
)

const movies = [
    { title: 'Inception' },
    { title: 'Platoon' }
]

ReactDOM.render(
    h(Movies, { movies }),
    document.querySelector('#app')
)