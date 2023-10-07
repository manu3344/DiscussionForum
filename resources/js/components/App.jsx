import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Login from './Login';
import Register from './Register';
import MainPage from './MainPage';
import '../css/styles.css'

function App() {
    return (
        <div>
            <Header />
            <Login />
            <Footer /> <br />
            <Header />
            <Register />
            <Footer /> <br />
            <Header />
            <MainPage />

        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
