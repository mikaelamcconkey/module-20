import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Project from './components/Project';

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#'
    }
  ];

  return (
    <div>
      <Header />
      <main>
        <Bio />
        <h2>Projects</h2>
        {projects.map(project => (
          <Project key={project.title} title={project.title} description={project.description} link={project.link} />
        ))}
      </main>
    </div>
  );
}

export default App;
