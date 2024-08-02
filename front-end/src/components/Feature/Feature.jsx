import './Feature.css';

const Feature = ({ icon, alt, title, text }) => {

    return (
        <figure className="feature">
            <img src={icon} alt={alt} />

            <figcaption>
                <h3>{title}</h3>
                <p>{text}</p>
            </figcaption>
        </figure>
    )
}

export default Feature
