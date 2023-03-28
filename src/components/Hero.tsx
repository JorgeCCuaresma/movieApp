import { FC } from "react";
import { DataResponse } from "../../types";

interface Props{
    result?: DataResponse
}


const Hero: FC<Props> = ({ result }) => {

    return (
        <>
            {!result && <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.teahub.io/photos/full/18-180656_1920x1080-movie-making-wallpaper-movie-film-video-film.jpg")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="hero-content flex-col lg:flex-row">                        
                        <img 
                        src="https://www.teahub.io/photos/full/18-180656_1920x1080-movie-making-wallpaper-movie-film-video-film.jpghttps://media.istockphoto.com/id/1336937059/es/foto/carretes-de-pel%C3%ADcula-sobre-fondo-negro-concepto-de-producci%C3%B3n-y-edici%C3%B3n-de-cine-v%C3%ADdeo-y-cine.jpg?s=612x612&w=0&k=20&c=z3m_W47GrbPc2L3HAVnmyA-Nt8_Z20r9ACOUJjFt1dg=" 
                        className="max-w-sm rounded-lg shadow-2xl hero-overlay m-5" />                       
                        <div>
                            <h1 className="text-5xl font-bold">WELCOME!!!</h1>
                            <p className="py-6  text-white w-80 ">
                                You arrived at the corner of the cinema, you can search our library for any  title, try to write one and if it exists we will find it.</p>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    )
}
export default Hero