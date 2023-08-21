import { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState();

  // Remove element from array
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();

      setTours(tours);
    } catch (error) {
      console.log(error.message);
    }

    setIsLoading(false);
  };

  useEffect(function () {
    fetchTours();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            className="btn"
            style={{ marginTop: '2rem' }}
            onClick={fetchTours}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  // TODO
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
