var appRouter = (app) => {
    app.get('/', (req, res) => {
        res.status(200).send('You hit the RESTful API');
    });
}

module.exports = appRouter;