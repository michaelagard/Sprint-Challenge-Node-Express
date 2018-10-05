const express = require('express');
const router = express.Router();
const projectModel = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
  projectModel.get()
    .then(projectModel => {
      res.json(projectModel);
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
}) // return all projects

router.get('/:id', (req, res) => {
  projectModel.get(req.params.id)
    .then(projectModel => {
      if (!projectModel) { return res.json({ message: `no projectModel by that id` }) }
      res.json(projectModel);
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
}); // supply projectModel ID, recieve projectModel object

router.post('/', (req, res) => {
  projectModel.insert(req.body)
    .then(() => res.json({ message: `Success!` }))
    .catch(err => console.log({ Message: `Error: ${err}` }));
}); // add project, return project

router.put('/:id', (req, res) => {
  projectModel.update(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Success!` })
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
}); // update project, recieve updated project

router.delete('/:id', (req, res) => {
  projectModel.remove(req.params.id)
    .then(removedProjectCount => {
      res.json({ message: `Success: ${req.params.id} was deleted. Removed ${removedProjectCount} action.` })
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
})
router.get('/projectactions/:id', (req, res) => {
  projectModel.getProjectActions(req.params.id)
    .then(project => {
      res.json(project);
    })
    .catch(err => console.log({ Message: `Error: ${err}` }));
}); // supply project ID, recieve project actions

module.exports = router;