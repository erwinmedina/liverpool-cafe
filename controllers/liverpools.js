const Liverpool = require('../models/liverpool');

module.exports = {
  index,
  show,
  create,
};

function index(req, res) {
  Liverpool.find({}, function(err, liverpools) {
    res.render('liverpools/index', {liverpools});
  });
}

function show(req, res) {
  Liverpool.findById(req.params.id, function(err, liverpool) {
        res.render('liverpools/show', {title: "Player Details", liverpool})
  })
};

function create(req, res) {
  console.log("FUCK");
    Liverpool.findById(req.params.id, function(err, liverpool) {
        req.body.user = req.user._id;

        liverpool.favorite.push(req.body);
        liverpool.save(function(err) {
            res.redirect(`/liverpools/${liverpool._id}`);
        });
    });
}



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
