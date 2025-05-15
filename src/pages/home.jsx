import React from "react";
import { Link } from 'react-router-dom';
function Home() {

    const handleClick = () => {
        alert('Button Clicked!');
    }

    return (


        <>
            <div className="">
                <nav className="justify-between flex" >

                    <h1 className="text-2xl  text-whit uppercase p-2 ">Whispering Woods</h1>
                    <ul className="flex gap-4 p-2 text-white text-lg uppercase" >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/contect">contect</Link>
                        </li>
                    </ul>

                    <button id="btn"
                        className="w-24 bg-black text-white p-1 uppercase rounded-xl hover:skew-6"
                        onClick={handleClick}
                    >
                        click me
                    </button>

                </nav>
                <header  className="  w-[600px] h-[300px] border-2  border-gray-500 shadow-xl/30 bg-blur rounded-2xl justify-center mx-auto mt-[100px]">
                    <div className="    text-white">
                        <h2 className="text-2xl m-4 p-4">The Whispering Woods</h2>

                        <p className="text-md m-4">

                            The Whispering Woods
                            Emerald canopies reach for the sky, ancient roots embrace the earth below. Life teems within, a symphony of rustling leaves and vibrant calls.

                        </p>
                        <div>

                            <button
                                className="w-[150px] bg-black text-white p-1 uppercase rounded-xl hover:skew-6"

                            >
                                <a href="/about">

                                    about us
                                </a>
                            </button>
                        </div>
                    </div>
                </header>

            </div>
        </>
    )
}

export default Home;