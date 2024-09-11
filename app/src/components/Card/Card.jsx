import { motion, AnimateSharedLayout } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { UilTimes, UilBell } from "@iconscout/react-unicons"; // Assurez-vous d'importer UilBell
import './Card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => { setExpanded(false); }} />
      ) : (
        <CompactCard param={props} setExpanded={() => { setExpanded(true); }} />
      )}
    </AnimateSharedLayout>
  );
};

const CompactCard = ({ param, setExpanded }) => {
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.value}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <span>{param.value * 60} FCFA <br /><br /></span>
      </div>
    </motion.div>
  );
};

const ExpandedCard = ({ param, setExpanded }) => {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: { // Corrigez la faute de frappe
        enabled: false,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-09-19T00:00:00.000Z",
          "2024-09-19T01:00:00.000Z",
          "2024-09-19T02:00:00.000Z",
          "2024-09-19T03:00:00.000Z",
          "2024-09-19T04:00:00.000Z",
          "2024-09-19T05:00:00.000Z",
          "2024-09-19T06:00:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>24 hours</span>
    </motion.div>
  );
};

export default Card;
