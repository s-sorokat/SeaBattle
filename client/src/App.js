import './App.css';
import GameViewContainer from "./components/GameView/GameViewContainer"

function App() {
    return (
        <div className="App">
            <header className="App-header"/>
            <div className='content'>
                <GameViewContainer/>
            </div>
            <footer/>
        </div>
    );
}

export default App;
