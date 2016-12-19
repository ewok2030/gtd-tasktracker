import Project from '../models/Project.model';

export function getProjects(req, res) {
  Project.find().sort('+name').exec((err, docs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(docs);
  });
}

export function getProject(req, res) {
  Project.findOne({ _id: req.params.id }).exec((err, doc) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(doc);
  });
}

export function addProject(req, res) {
  // Check for required fields
  if (!req.body.project.name || !req.body.project.isActive) {
    res.status(403).end();
  }

  const newDoc = new Project(req.body.project);

  newDoc.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}

export function deleteProject(req, res) {
  Project.findOne({ _id: req.params.id }).exec((err, doc) => {
    if (err) {
      res.status(500).send(err);
    }
    doc.remove(() => {
      res.status(200).end();
    });
  });
}
