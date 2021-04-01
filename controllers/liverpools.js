const Liverpool = require('../models/liverpool');
const Matchdate = require('../models/matchdate');

module.exports = {
  index,
  show,
  create,
  favorite,
  delete: deleteFavorite,
  matchdates,
};

// shows the landing page //
function index(req, res) {
  Liverpool.find({}, function(err, liverpools) {
    res.render('liverpools/index', {liverpools});
  });
}

// shows the page with all the players //
function show(req, res) {
  Liverpool.findById(req.params.id, function(err, liverpool) {
        res.render('liverpools/show', {title: "Player Details", liverpool})
  })
};

// shows the matchdates //
function matchdates(req, res) {
  Matchdate.find({}, function(err, matchdates) {
    res.render('liverpools/matchdates', {matchdates});
  });
};

// renders the favorite page //
function favorite(req, res) {
  Liverpool.find({}, function(err, liverpools) {
    res.render("liverpools/favorite", {liverpools});
  })
};

// creates the favorites //
function create(req, res) {
  Liverpool.findById(req.params.id, function(err, liverpool) {
    req.body.user = req.user._id;
    
    liverpool.favorite.push(req.body);
    liverpool.save(function(err) {
            res.redirect(`/liverpools/${liverpool._id}`);
        });
      });
    }
    
    // removes item from favorite //
function deleteFavorite(req, res) {
  Liverpool.findById(req.params.id).then(function(liverpool) {
    
    for (let i = 0; i < liverpool.favorite.length; i++) {
      if (liverpool.favorite[i].user.equals(req.user._id)) {
        liverpool.favorite[i].remove(req.user._id);
      }
    }
    
    liverpool.save().then(function() {
      res.redirect("/liverpools");
    }).catch(function (err) {
      return next(err)
    })
  })
}