import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateNPID from './CreateNPID.tsx'
import Home from './Home.tsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/npid" element={<CreateNPID />} />
            </Routes>
        </Router>
    )
}

export default App
