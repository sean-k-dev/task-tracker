import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Error from "./pages/Error"


// Components
import Container from "./components/Container"

// Stylesheet
import "./App.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Container/>}/>
                <Route path="about/*" element={<About/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    </React.StrictMode>, 
    document.getElementById("root")
    )

