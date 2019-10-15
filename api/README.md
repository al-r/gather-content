# API

## Prerequisite

- yarn
- mongodb
- node

## How to begin

- `yarn install`
- `yarn start:db` starts the MongoDB instance.
- `yarn setup:db` seeds some exercises into MongoDB (only run once or when you wish to reset the exercises data. This also requires the db to be started before running).
- `yarn start` starts the local server.

## Schema

This is the data structure for workouts, exercises and sets. When making requests (GET, POST, PUT, DELETE) you can assume that the request body will match this structure. When entities are related this will clearly be documented by an id such as `workoutId` or `exerciseId`.

```
var ExerciseSchema = new Schema({
  name: {
    type: String,
    required: 'name is required to create an exercise'
  },
  numberOfSets: {
    type: Number,
    required: 'numberOfSets are required to create an exercise'
  },
  targetReps: {
    type: Number,
    required: 'numberOfReps are required to create an exercise'
  }
});
```

```
var WorkoutSchema = new Schema({
  exerciseId: {
    type: Schema.Types.ObjectId,
    required: 'The exerciseId is required to create a workout'
  },
  status: {
    type: String,
    enum: ['COMPLETE', 'IN_PROGRESS', null],
    default: null
  }
});
```

```
var SetSchema = new Schema({
  workoutId: {
    type: Schema.Types.ObjectId,
    required: 'workoutId is required to create a set'
  },
  repCount: {
    type: Number,
    default: 0
  }
});
```

## Endpoints

- [GET] `localhost:3000/exercises` - returns an array of exercises.
- [POST] `localhost:3000/exercises` - creates a new exercise.
- [GET] `localhost:3000/exercise/${exerciseId}` - gets an exercise.
- [PUT] `localhost:3000/exercise/${exerciseId}` - updates an exercise.
- [DELETE] `localhost:3000/exercise/${exerciseId}` - deletes an exercise.

-----------------

- [GET] `localhost:3000/workouts` - returns an array of workouts.
- [POST] `localhost:3000/workouts` - creates a new workout & the sets.
- [GET] `localhost:3000/workout/${workoutId}` - gets a workout.
- [PUT] `localhost:3000/workout/${workoutId}` - updates a workout.
- [DELETE] `localhost:3000/workout/${workoutId}` - deletes a workout.

-----------------

- [GET] `localhost:3000/sets` - returns an array of sets.
- [POST] `localhost:3000/sets` - creates a new set.
- [GET] `localhost:3000/sets/${workoutId}` - returns an array of sets related to a workout.
- [GET] `localhost:3000/set/${setId}` - gets a set.
- [PUT] `localhost:3000/set/${setId}` - updates a set.
- [DELETE] `localhost:3000/set/${setId}` - deletes a set.

## Tips

- Postman is a great tool for testing this restful API. Use the commands to run the API and then try the endpoint for getting the exercises :)
