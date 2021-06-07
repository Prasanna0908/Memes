import React from "react"




function LoadAll(props) {
    console.log(props.isLoad)
    console.log(props)



    if (props.isLoad === false) {

        const Components = props.memes.map((meme) => {

            return (
                <div className="card 1">
                    <div className="card_image"> <img src={meme.url} onClick={props.handler} /> </div>
                    <div className="card_title title-white">
                        <p >{meme.name}</p>
                    </div>
                </div>
            )
        })

        return (
            <div>



                <div className="cards-list">

                    {Components}



                </div>
            </div>
        )
    }
    else {
        return (
            <h1>loading</h1>
        )
    }



}


export default LoadAll