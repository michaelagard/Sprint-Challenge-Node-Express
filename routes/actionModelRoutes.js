const express = require('express');
const router = express.Router();
const actionModel = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
  actionModel.get()
    .then(actionModel => {
      res.json(actionModel);
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
}) // return all actions

router.get('/:id', (req, res) => {
  actionModel.get(req.params.id)
    .then(actionModel => {
      // if (actionModel.id === undefined) { return res.json({ message: `no actionModel by id: ${req.params.id}` }) }
      // the above doesn't work due to the error recieved back "Cannot read property 'completed' of undefined"
      // not sure how to proceed
      res.json(actionModel);
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
}); // supply actionModel ID, recieve actionModel object


router.post('/', (req, res) => {
  actionModel.insert(req.body)
    .then(() => res.json({ message: `Success!` }))
    .catch(err => console.log({ Message: `Error: ${err}` }));
}); // add action, return action

router.put('/:id', (req, res) => {
  actionModel.update(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Success!` })
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
}); // update action, recieve updated action

router.delete('/:id', (req, res) => {
  actionModel.remove(req.params.id)
    .then(removed => {
      res.json({ message: `Success: ${req.params.id} was deleted. Removed ${removed} action.` })
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
}) // delete action, recieve deleted count
module.exports = router;