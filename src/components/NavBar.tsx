import { FC, useState } from "react";
import axios from 'axios';
import { DataResponse } from '../../types'

interface Props {
    setResult: (result: DataResponse) => void
}

const NavBar: FC<Props> = ({ setResult }) => {

    const [search, setSearch] = useState<string>()
    const apiKey: string = import.meta.env.VITE_RapidAPIKey
    const apiHost: string = import.meta.env.VITE_RapidAPIHost

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement> ) => {
        if (event.key === 'Enter') {
            getSearch();
        }
    }
    const getSearch = () => {
        if (!search) return
        const options = {
            method: 'GET',
            url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
            params: { q: search },
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': apiHost
            }
        };

        axios.request(options)
            .then((response) => {
                console.log(response);
                setResult(response.data)


            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <><div className="navbar bg-neutral absolute mt-0">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl">MovieApp</a>
            </div>
            <div className="flex-none gap-2">
                <div className="flex-col">
                    <input
                        type="search"
                        onKeyDown={handleKeyDown}
                        placeholder="🔍Type here"
                        className="input input-bordered mr-2"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
        </div>





        </>

    )

}
export default NavBar;