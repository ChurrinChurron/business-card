import "./Card.css";
import Wave from "../assets/white-overlay.svg";

const Card = ({img, title, desc, imgAvatar, nameAuthor, profAuthor}) => {
  return (
    <div className="card">
        <div className="card__img">
            <img src={img} alt={title} />
            <img src={Wave} className="wave" alt="wave" />
        </div>
        <div className="card__title">
            <h2>{title}</h2>
            <h3>{desc}</h3>
        </div>
        <div className="card__author">
            <img src={imgAvatar} alt={nameAuthor} />
            <div className="author__content">
                <h4>{nameAuthor}</h4>
                <h5>{profAuthor}</h5>
            </div>
        </div>
    </div>
  )
}

export default Card