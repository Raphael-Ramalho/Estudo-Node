const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// Middlewares

app.use(express.json());
app.use(morgan('dev'));


app.use((req, res, next) => {
  console.log('hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// Route handlers

const getTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestTime: req.requestTime,
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

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not implemented...',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not implemented...',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not implemented...',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not implemented...',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Route not implemented...',
  });
};

// Routes
const tourRouter = express.Router();
const userRouter = express.Router();
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

tourRouter.route('/').get(getTours).post(postTours);
tourRouter.route('/:id').get(getTour);

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

// Start Server

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
