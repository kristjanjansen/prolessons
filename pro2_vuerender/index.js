const Movie = {
    props: ['movie'],
    render: function(h) { return h(
        'div',
        { style: { color: 'red' } },
        this.movie.title 
    )}
}

const Movies = {
    props: ['movies'],
    render: function(h) { return h(
        'div',
        {},
        [
            h('h1', {}, 'Movies'),
            this.movies.map(movie => h(Movie, { props: { movie }})),
        ]
    )}
}

const movies = [
    { title: 'Inception' },
    { title: 'Platoon' }
]

new Vue({
    el: '#app',
    render: function(h) {
        return h(
            Movies,
            { props: { movies } },
        )
    }
})