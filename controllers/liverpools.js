const Liverpool = require('../models/liverpool');
const data = require("../data");

module.exports = {
  index,
  show,
  create,
};

function index(req, res) {
  Liverpool.find({}, function(err, liverpools) {
    res.render('liverpools/index', {liverpools, data});
  });
}

function show(req, res) {
  Liverpool.findById(req.params.id, function(err, liverpool) {
      Liverpool.find({liverpool: liverpool._id}, function(err, liverpools) {
          res.render('liverpools/show', {liverpool, data});
      })
  })
};

function create(req, res) {
  if (req.body.departs === "") delete req.body.departs;

  Liverpool.create(req.body, function(err, liverpool) {
    if (err) console.log(err);
    res.redirect("/liverpools");
  })
}


// function show(req, res) {
//   Liverpool.findById(req.params.id)
//   .populate('cast').exec(function(err, liverpool) {
//     // Query for performers not already in this movie's cast array
//     Performer.find(
//       {_id: {$nin: movie.cast}},
//       function(err, performers) {
//         res.render('movies/show', { title: 'Movie Detail', movie, performers });
//       }
//     );
//   });
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
