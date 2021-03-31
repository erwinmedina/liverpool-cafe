const Liverpool = require('../models/liverpool');

module.exports = {
  index,
  show,
  create,
  favorite,
  delete: deleteFavorite,
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
  console.log("FUCK");

  Liverpool.findByIdAndDelete(req.params.id, function(err, deletedLiverpool) {
    if (err) console.log(err)
  })
  res.redirect('/liverpools');
}
//   Liverpool.findOne({'favorites._id': req.params.id}).then(function(liverpool) {
//     const element = liverpool.favorites.id(req.params.id);
//     element.remove();
//     liverpool.save().then(function() {
//       res.redirect(`/liverpools/${liverpool._id}`);
//     }).catch(function(err) {
//       return next(err);
//     })
//   })
// }

//   Liverpool.findById(req.params.id, function(err, liverpool) {
//       liverpool.favorite.shift(req.body);
//       liverpool.save(function(err) {
//           res.redirect(`/liverpools/${liverpool._id}`);
//       });
//   });
// }


// function create(req, res) {
//   Liverpool.find({}, function(err, liverpools) {
//     res.render('index', {liverpools});
//   });


  // if (req.body.departs === "") delete req.body.departs;

  // Liverpool.create(req.body, function(err, liverpool) {
  //   if (err) console.log(err);
  //   res.redirect("/liverpools", {liverpools});
// }

// function favorite(req, res) {
//   Liverpool.findOne({})
// }


// function newMovie(req, res) {
//   res.render('movies/new', { title: 'Add Movie' });
// }

// function create(req, res) {
//   // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   const movie = new Movie(req.body);
//   movie.save(function(err) {
//     if (err) return res.redirect('/movies/new');
//     console.log(movie);
//     res.redirect(`/movies/${movie._id}`);
//   });
// }
