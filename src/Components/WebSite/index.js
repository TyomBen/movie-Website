import { deleteCurrentList } from "../../store/action";
import './styles.css';
import { useSelector, useDispatch } from "react-redux";;

const WebSite = () => {
  const dispatch = useDispatch ()
  const movies = useSelector (state => state.movie.movies)
  const handleDeleteClick = (imdbID) => {
    dispatch (deleteCurrentList(imdbID))
  }

    return movies.length ? (
    <main>
      <section className="dataSection">
        {movies.map(items => {
     const { Title, Year, imdbID, Type, Poster } = items;
                return (
                  <article>
                    <div className = "container-style">
                      <img src={Poster} alt={Title} className = 'dataStyles'/>
                    </div>
                    <div className="coctail-footer">
                      <h3> Movie Name </h3>
                        <h4>{Title}</h4>
                        <h4>Year : {Year}</h4>
                        <h5>genre : {Type}</h5>
                        <button onClick={() => handleDeleteClick(imdbID)}>Delete</button>
                    </div>
                  </article>
                );
              })}
    
      </section>
    </main>
  ) : (
    <a href="/list-of-movies">BACK</a>
  )
}

export default WebSite;
