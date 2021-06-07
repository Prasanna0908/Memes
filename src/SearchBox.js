import React from "react"

// function SearchBox() {



//     return (
//         <div className="wrapper">
//             <div className="search-input">
//                 <a href="" target="_blank" hidden></a>
//                 <input type="text" placeholder="Type to search.."></input>
//                 <div className="autocom-box">

//                 </div>
//                 <div className="icon"><i className="fa fa-search"></i></div>
//             </div>
//         </div>
//     )
// }

class SearchBox extends React.Component {

    constructor(props) {
        super(props)
        this.item = ["Channel",

            "YouTube",
            "YouTuber",
            "YouTube Channel",
            "Blogger",
            "Bollywood",
            "Vlogger",
            "Vechiles",
            "Facebook",
            "Freelancer",
            "Facebook Page",
            "Designer",
            "Developer",
            "Web Designer",
            "Web Developer",
            "Login Form in HTML & CSS",
            "How to learn HTML & CSS",
            "How to learn JavaScript",
            "How to became Freelancer",
            "How to became Web Designer",
            "How to start Gaming Channel",
            "How to start YouTube Channel",
            "What does HTML stands for?",
            "What does CSS stands for?",
        ]
        this.state = {
            suggestions: [],
            text: "",
        }
    }

    onTextChanged = ((e) => {
        const value = e.target.value;
        let suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.item.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value,
        }))
    })


    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions() {
        const { suggestions } = this.state
        if (suggestions.length === 0) {
            return null
        }

        return (
            <ul>
                {suggestions.map((item) => (<li onClick={() => (this.suggestionSelected(item))} className="suggestions">{item}</li>))}
            </ul>
        )
    }



    render() {

        const { text } = this.state

        return (
            <div className="wrapper">
                <div className="search-input">

                    <a href="" target="_blank" hidden></a>
                    <input type="text" placeholder="Search Meme.." value={text} onChange={this.onTextChanged}></input>
                    <div className="autocom-box">

                    </div>
                    <div className="icon"><i className="fa fa-search"></i></div>

                    {this.renderSuggestions()}
                </div>
            </div>
        )
    }
}




export default SearchBox