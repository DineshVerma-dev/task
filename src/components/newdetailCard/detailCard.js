import "./detailCard.css";

const DetailCard = ({ image, title, sub_title, price, id }) => {
    return (
        <div className="card-detail" id={id}>
            <div
                className="card-image-detail"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="card-title-detail">{title}</div>
            <div className="card-sub-detail">{sub_title}</div>
            <div className="card-price-detail">Price : ${price}</div>
        </div>
    );
};

export default DetailCard;