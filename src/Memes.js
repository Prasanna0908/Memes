import React, { Fragment } from 'react';
import logo from './images/1.jpg'
import LoadAll from "./LoadAll"
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


import html2canvas from 'html2canvas';


class Memes extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            activeImage: "https://i.imgflip.com/30b1gx.jpg",
            allMemes: [],
            loading: true
        }

        this.handleChange = this.handleChange.bind(this)
        // this.handler = this.handler.bind(this);

        this.btn = this.btn.bind(this)



    }

    componentDidMount() {
        fetch(`https://api.imgflip.com/get_memes`).then(res => res.json()).then(response => {

            const { memes } = response.data
            console.log(memes[0])
            this.setState({ allMemes: memes, loading: false })
            console.log(this.state.allMemes)
        })



    }

    componentDidUpdate() {
        <img src={this.state.allMemes[0].url} className="logo" alt="ede" />

    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }


    Change = (e) => {
        this.setState({ activeImage: e.target.src })
        window.scrollTo(0, 0);
    }

    // handler(e) {
    //     console.log("clicked")
    //     let url = console.log(e.target.src)
    //     return (< img src={e.target.src} className="logo" alt="wec" />)
    //     this.setState({
    //         activeImage: e.target.src
    //     });
    // }

    btn = (e) => {
        console.log("button clicked");
        e.preventDefault()
        console.log(document.querySelector(".Parent"))
        if (document.querySelector(".Parent")) {
            domtoimage.toBlob(document.querySelector(".Parent"))
                .then(function (blob) {
                    window.saveAs(blob, 'my-node.png');
                });
        }
        else {
            console.log("sfvf")
        }


    }






    render() {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="topText" value={this.state.topText} onChange={this.handleChange} placeholder="Enter First Line" className="First"></input>
                        <br />
                        <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange} placeholder="Enter Second Line" className="Second"></input>
                        <br />
                        {/* <button id="foo" onClick={this.btn}>download img</button> */}

                        <div class="sub-main">
                            <button id="foo" onClick={this.btn} className="button-two"><span>Download</span></button>
                        </div>
                    </div>



                    {/* <div className="images small__container"> */}

                    <div className="Parent" id="#capture">

                        {/* <img src={logo} className="logo" alt="" /> */}




                        <img src={this.state.activeImage} className="logo" alt="wec" />

                        {/* <img src={(this.state.allMemes) === true ? this.state.allMemes[0].url : { logo }} className="logo" /> */}



                        <Draggable>
                            <h2 className="top box draggable">{this.state.topText}</h2>
                        </Draggable>

                        <Draggable>
                            <h2 className="bottom box">{this.state.bottomText}</h2>
                        </Draggable>











                    </div>





                </form>
                <LoadAll memes={this.state.allMemes} isLoad={this.state.loading} active={this.state.activeImage} handler={this.Change} />
            </div>
        )
    }
}

export default Memes