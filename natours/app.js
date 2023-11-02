const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());
app.use((req, res, next)=>{
  console.log('hello from the middleware')
  next()
})

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours: tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);

  const id = Number(req.params.id);
  const tour = tours.find((el) => el.id === id);

  if (id > tours.length || !tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: { tour },
  });
};

const postTours = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { tour: newTour },
      });
    }
  );
};

app.route('/api/v1/tours').get(getTours).post(postTours);

app.get('/api/v1/tours/:id', getTour);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
