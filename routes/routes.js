var faker = require('faker');
var appRouter = (app) => {
    app.get('/', (req, res) => {
        res.status(200);
        console.log('Hit the API route');
        res.redirect('/user');
    });

    app.get('/user', (req, res) => {
        var data = ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
        //res.status(200).send(data);
        res.render('landing', {
            data: data
        });
    });

    app.get('/user/:num', (req, res) => {
        var users = [];
        var num = req.params.num;

        if (isFinite(num) && num > 0) {
            for (i = 0; i <= num - 1; i++) {
                users.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email()
                });
            }
            //res.status(200).send(users);
            res.render('user', {
                users: users
            });

        } else {
            res.status(400).send({
                message: 'Invalid Number Supplied...'
            });
        }
    });
}

module.exports = appRouter;