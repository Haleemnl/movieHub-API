import React, { useEffect, useState } from "react"

import './maincontent.css'

// content
export default function MainContent() {

    const [formData, setFormData] = useState('')

    const [api, setApi] = useState([])

    const [sub, setSub] = useState('')


    useEffect(() => {

        fetching()

    }, [sub])


    const fetching = async () => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c42f23005amsh66b1b06d20813b2p1a597ejsn01fbce6f98e0',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };

        let res = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${formData}`, options)
        let data = await res.json()
        setApi(data.d);
    }

    function handlechange(e) {
        setFormData(e.target.value)
    }

    function handlesubmit(e) {
        e.preventDefault()
        setSub(formData)
    }


    return (
        <div className="center">

            <div>
                <div className="center-container">

                    <div className="center-logo">

                        <h1>Movie Hub</h1>

                    </div>

                    <form onSubmit={handlesubmit} className='form'>

                        <div className="center">
                            <input
                                type="text"
                                onChange={handlechange}
                                value={formData}
                            />

                            <button type="submit">search ↗ </button>
                        </div>
                    </form>



                </div>

                <div className="mapped ">
                    {api.map(item => {
                        console.log(item);

                        return (

                            <div key={item.id} className="main-container" >

                                <img className="main-img" src={item.i.imageUrl} alt="" />

                                <div className="main-text">
                                    <p className="main-title">Title:{item.l}</p>
                                    <p className="main-char">Characters:{item.s}</p>
                                    <p className="main-char">Year:{item.y}</p>
                                </div>
                            </div>

                        )
                    })}
                </div>


                {/* <div className="mapped ">


                    <div className="main-container" >

                        <img className="main-img" src='/images/card.jpeg' alt="" />
                        <div className="main-text">
                            <p className="main-title">Title:batman</p>
                            <p className="main-char">Characters:batman, superman, ironoman</p>
                        </div>
                    </div>
                    <div className="main-container" >

                        <img className="main-img" src='/images/card.jpeg' alt="" />
                        <div className="main-text">
                            <p className="main-title">Title:batman</p>
                            <p className="main-char">Characters:batman, superman, ironoman</p>
                        </div>
                    </div>



                </div> */}


            </div>




        </div>
    )



}