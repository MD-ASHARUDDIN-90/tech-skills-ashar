import React from 'react';
import './style.css';

export default function App() {
  const data = [
    {
      name: 'Captain Codebeard',
      title: 'MERN Explorer',
    },
    {
      name: 'Reacticus Maximus',
      title: 'King of Components',
    },
    {
      name: 'Sir React-a-lot',
      title: 'Master of React-Native Sorcery',
    },
    {
      name: 'Svelte the Enchanting',
      title: 'Sorcerer Supreme',
    },
    {
      name: 'Expresso Express',
      title: 'Ace of the Middleware Realm',
    },
    {
      name: 'Mongo the Magnificent',
      title: 'Guardian of the Database Crown',
    },
    {
      name: 'HTML Hero',
      title: 'Master of Markup',
    },
    {
      name: 'CSS Wizard',
      title: 'Sultan of Styles',
    },
    {
      name: 'Bootstrap Maestro',
      title: 'Grandmaster of Grids',
    },
    {
      name: 'Material UI Maestro',
      title: 'Designer of UI Realms',
    },
    {
      name: 'Redux Ruler',
      title: 'Conqueror of State',
    },
    {
      name: 'RecoilJS Guru',
      title: 'Master of Reactive Atoms',
    },
  ];

  return (
    <div className="main">
      <h1 className="title">ASHAR SKILLS</h1>
      <div className="container">
        {data.map((item) => (
          <div className="card" key={item.name}>
            <h2>{item.name}</h2>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
