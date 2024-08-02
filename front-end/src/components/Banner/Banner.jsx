import './Banner.css';
import banner from '../../assets/bank-tree.webp';

const Banner = () => {

  return (
    <figure className="banner">
      <img src={banner} alt="banner" />

      <figcaption>
        <b>No fees.</b><br />
        <b>No minimum deposit.</b><br />
        <b>High interest rates.</b>
        <p>Open a savings account with Argent Bank today!</p>
      </figcaption>
    </figure>
  )
}

export default Banner