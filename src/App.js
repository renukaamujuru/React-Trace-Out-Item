import React from 'react';
import CardList from './Components/Card-list/Card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [
      ],
      searchField: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(photos => this.setState({ monsters: photos }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField));
    return (
      <React.Fragment>
        <h1 className="header">Monsoon Monsters Land</h1>
        <input className="Search-box" type="search" placeholder="Search Monster"
          onChange={e => this.setState({ searchField: e.target.value })} />
        <div className="Card-list">
          <CardList monsters={filteredMonster} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;

