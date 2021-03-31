const Liverpool = require("../models/liverpool");

module.exports = {
    create,
    delete: deleteComment,
    update,
}

function create(req, res) {
    Liverpool.findById(req.params.id, function(err, liverpool) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        liverpool.comments.push(req.body);
        liverpool.save(function(err) {
            res.redirect(`/liverpools/${liverpool._id}`);
        });
    });
}

function deleteComment(req, res, next) {
    Liverpool.findOne({'comments._id': req.params.id}).then(function(liverpool) {
        const comment = liverpool.comments.id(req.params.id);

        if (!comment.user.equals(req.user._id)) return res.redirect('/liverpools');
        comment.remove();
        liverpool.save().then(function() {
            res.redirect(`/liverpools/${liverpool._id}`);
        }).catch(function(err) {
            return next(err);
        })
    })
}

function update(req, res) {
    // console.log(Liverpool.comments);
    Liverpool.findOne({'comments._id': req.params.id}, function(err, liverpool) {
        let comment = liverpool.comments.id(req.params.id);
        Object.assign(comment, req.body);
        liverpool.save(function(err) {
            res.redirect(`/liverpools/${liverpool._id}`)
        })
    })

}