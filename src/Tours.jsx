import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {tours.map((tour) => (
          <Tour tour={tour} key={tour.id} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
