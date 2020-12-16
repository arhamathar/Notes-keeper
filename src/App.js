import React from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <CreateArea />
            <Note key={1} title="Note title" content="Note content" />
            <Footer />
        </div>
    );
}

export default App;
