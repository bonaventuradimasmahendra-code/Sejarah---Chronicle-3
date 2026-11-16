import { useState } from "react";

export default function Index(){
    const [selectedItem, setSelectedItem] = useState("");
    const [show, setShow] = useState(false);

    const handleClick = (select)=>{
        setSelectedItem(select);
        setShow(true);
    }

    function showPop() {
        if (String(selectedItem).toLowerCase().includes("dimas")) {
            return(
                <div className="showpop-container">
                    <div className="video-pop">
                        <video width={600} controls>
                            <source src="" type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="explain-pop">
                        <h1>JUDUL</h1>
                        <p>PARAGRAF</p>
                        <button onClick={()=> setShow(false)}>Hide</button>
                    </div>
                </div>
            )
        } else if (String(selectedItem).toLowerCase().includes("josua")) {
            return(
                <div className="showpop-container">
                    <div className="video-pop">
                        <video width={600} controls>
                            <source src="" type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="explain-pop">
                        <h1>JUDUL</h1>
                        <p>PARAGRAF</p>
                        <button onClick={()=> setShow(false)}>Hide</button>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="showpop-container">
                    <div className="video-pop">
                        <video width={600} controls>
                            <source src="" type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="explain-pop">
                        <h1>JUDUL</h1>
                        <p>PARAGRAF</p>
                        <button onClick={()=> setShow(false)}>Hide</button>
                    </div>
                </div>
            )
        };
    };

    return (
        <div className="index-container">
            {show && 
                showPop()
            }
            <section className="right-container">
                {/* KALAU BISA INI NANTI JAD */}
                <div className="video-one" onClick={()=> handleClick("Video Dimas")}>
                    <video width={400} controls>
                        <source src="" type="video/mp4"></source>
                    </video>
                    <h1>SEJARAH KERIS</h1>
                    <p>PENJELASAN SINGKAT JUDUL 1</p>
                </div>
                <div className="video-two" onClick={()=> handleClick("Video Josua")}>
                    <video width={400} controls>
                        <source src="" type="video/mp4"></source>
                    </video>
                    <h1>JUDUL VID 2</h1>
                    <p>PENJELASAN SINGKAT JUDUL 2</p>
                </div>
                <div className="video-three" onClick={()=> handleClick("Video Octa")}>
                    <video width={400} controls>
                        <source src="" type="video/mp4"></source>
                    </video>
                    <h1>JUDUL VID 3</h1>
                    <p>PENJELASAN SINGKAT JUDUL 3</p>
                </div>
            </section>
        </div>
    )
}