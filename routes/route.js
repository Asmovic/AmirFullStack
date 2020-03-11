const { userModel } = require('../Model/users');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('This is the root route');
    })


    let newUser = (req, res) => {
        let user = new userModel(req.body);
        user.save((err, userPost) => {
            if (err) {
                console.log('error.....')
                res.send(err);
            } else {
                res.send(userPost);
            }
        });
    };

    app.post('/user', newUser);

    let allUsers = (req, res) => {
        userModel.find({}, (err, posts) => {
            if (err) {
                res.send(err);
            } else {
                res.json(posts);
            }
        }).sort({ username: 1 });
    };

    app.get('/users', allUsers);

}

