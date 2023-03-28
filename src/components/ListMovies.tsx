import { FC } from "react";
import { DataResponse } from "../../types";

interface Props {
  result?: DataResponse
}

const ListMovies: FC<Props> = ({ result }) => {

  return (
    <>
      <div className="container-xl bg-neutral">
        {result && <h1 className="text-5xl font-bold text-center pt-20 mb-9">Results</h1>}

        <div className="carousel rounded-box flex-wrap justify-center">
          {result && result.d.map((e, index) => (
            <div key={e.id} className="card w-96 bg-base-100 shadow-xl m-10">
              <figure><img src={e.i && e.i.imageUrl ? e.i.imageUrl : ""} className='h-80 mt-8' alt={e.l} /></figure>
              <div className="card-body">
                <h2 className="card-title">{e.l}</h2>
                <p>Actors: {e.s}</p>
                <p>Year: {e.y}</p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </>
  )
}
export default ListMovies;