import React from 'react';
import Container from 'react-bootstrap/Container'
import AppNavbar from './components/AppNavbar'
import PostsList from './components/PostsList'
import './App.css';


function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Container>
        <PostsList/>
      </Container>
    </div>
  );
}

export default App;
