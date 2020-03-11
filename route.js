module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('This is the root route');
    })

    app.get('/user', (req, res) => {
        res.send('Hello!!! Welcome to users route');
    })

}

