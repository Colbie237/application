import "./Cards.css";
import { cardsData } from "../data/Data";
import Card from "../Card/Card";
import { UilBell } from "@iconscout/react-unicons"; // Assurez-vous de cette importation

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => (
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;