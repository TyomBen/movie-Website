import { datamovies } from "../DataMovies";
import './styles.css';

const WebSite = () => {
  return (
    <main>
      <section className="dataSection">
        {datamovies.map(items => {
          return (
            <div className="dataContainer">
              {items.Search.map(movies => {
                const { Title, Year, imdbID, Type, Poster } = movies;
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
                    </div>
                  </article>
                );
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default WebSite;
