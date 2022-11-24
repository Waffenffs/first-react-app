import React from "react"
import ReactDOM from "react-dom"

const HeaderStyling = {
    display: "flex",
    justifyContent: "space-between",
}

const LiStyling = {
    paddingRight: "20px",
    color: "white",
    marginTop: "10px"
}

function Header() {
    return (
        <header style={{background: "black"}}>
            <nav style={HeaderStyling}>
                <img src="./react-logo.png" width="70px" />
                <ul style={{listStyleType: "none", display: "flex", alignItems: "centenr"}}>
                    <li style={LiStyling}><a style={{cursor: "pointer"}}>Pricing</a></li>
                    <li style={LiStyling}><a style={{cursor: "pointer"}}>About</a></li>
                    <li style={LiStyling}><a style={{cursor: "pointer"}}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

const Footer = () => {
    return(
        <footer>
            <small style={{position: "absolute", bottom: "0"}}>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

const MainContent = () => {
    return(
        <>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
            <li>It's a hireable skill</li>
            <li>It's in-demand in the Pinoy Tech industry</li>
            <li>I want to challenge myself into gaining a new Tech skill</li>
        </ol>
        </>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))