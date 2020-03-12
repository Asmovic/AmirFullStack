const { userModel, memberModel } = require('../Model/users');

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
                res.send("user saved successfully");
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

    let newMember = (req, res) => {
        let member = new memberModel(req.body);

        member.save((err, data) => {
            if (err) {
                res.status('400').send(err);
            } else {
                res.status('201').send(data)
            }
        })
    }

    app.post('/member', newMember);


    let allMembers = (req, res) => {
        memberModel.find({}, (err, posts) => {
            if (err) {
                res.send(err);
            } else {
                res.json(posts);
            }
        }).sort({ name: 1 });
    };
    app.get('/members', allMembers);

}

