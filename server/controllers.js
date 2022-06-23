const Diary = require('./db.js');

module.exports = {
  get: (req, res) => {
    Diary.find().sort({"date": "descending"})
      .then(results => res.send(results))
      .catch(err => {
        res.status(404);
        res.send(err);
      });
  },
  post: (req, res) => {
    Diary.create(req.body)
      .then(results => {
        res.status(201);
        res.send(results);
      })
      .catch(err => {
        res.status(404);
        res.send(err);
      })
  },
  delete: (req, res) => {
    Diary.deleteOne(req.body, (err, response) => {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.send(response);
      }
    });
  },
  patch: (req, res) => {
    Diary.findByIdAndUpdate(req.body._id, req.body, (err, response) => {
      if (err) {
        res.status(404);
        res.send(err);
      } else {
        res.send(response);
      }
    })
  }
}