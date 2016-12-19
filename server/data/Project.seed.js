import Project from '../models/Project.model';

export default function () {
  Project.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    console.log('Seeding Projects...');
    const projectA = new Project({ name: 'Test Project A' });
    const projectB = new Project({ name: 'Test Project B' });

    Project.create([projectA, projectB], (error) => {
      if (!error) {
        console.log('Project seeding complete!');
      } else {
        console.log(`Project error: ${error.message}`);
      }
    });
  });
}
