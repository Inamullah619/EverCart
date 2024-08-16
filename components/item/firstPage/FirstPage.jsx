import Slideshow from '../Image/Image';
import './firstPage.css';

export default function MainPage() {
  return (
    <section>
      <div className='leftSide'>
        <h1>Welcome to EverCart</h1>
        <p>
          At EverCart, we’re dedicated to bringing you the latest in fashion and
          home essentials. Our handpicked collections feature the trendiest
          clothing, accessories, and unique home décor items, all designed to
          elevate your lifestyle. Enjoy an effortless shopping experience with
          our exceptional customer service and fast delivery.
        </p>
        <button>Shop Now</button>
      </div>
      <div>
        <Slideshow />
      </div>
    </section>
  );
}
