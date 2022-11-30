import '../sass/card.scss';

const Card = (props) => {
  return (
    <div className="card">
        <p className="card_name">{props.name}</p>
        <div className="card_circle"></div>
        <img className="card_img" src={props.img} alt="imagen pokemon"/>
    </div>
  )
}

export { Card }