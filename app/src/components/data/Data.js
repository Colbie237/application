// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilBell} from "@iconscout/react-unicons";
 
// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
// Sidebar Data

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Home",
    path: "/Landing", 
  },

  {
    icon: UilBell,
    heading: "Alerts",
    path: "/Alert", 
  },
  {
    icon: UilPackage,
    heading: 'Prediction/Rapport',
    path: "/Report", 
  },
  {
    icon: UilChart,
    heading: 'Statistique',
    path: "/Analytics", 
  },
  {
    icon: UilUsersAlt,
    heading: 'Clients',
    path: "/Table", 
  },
  {
    icon: UilUsersAlt,
    heading: 'Prise de decision',
    path: "/Conseil", 
  },
];

// Analytics RT data
export const Ph = [
  {
    name: "Energie produit",
    data: [8, 2, 4, 6],
  },

  {
    name: "Energie consommée",
    data: [10, 8, 8, 3],
  },
];
export const orp = [
  {
    name: "Energie consommée",
    data: [8, 2, 4, 6],
  },

  {
    name: "pourcentage baterie",
    data: [10, 8, 8, 3],
  },
];
export const Solubility = [
  {
    name: "Energie produit",
    data: [8, 2, 4, 6],
  },

  {
    name: "pourcentage baterie",
    data: [10, 8, 8, 3],
  },
];
export const Turbity = [
  {
    name: "Temperature",
    data: [8, 2, 4, 6],
  },

  {
    name: "Humidité",
    data: [10, 8, 8, 3],
  },
];
export const tmp = [
  {
    name: "Temperature",
    data: [8, 2, 4, 6],
  },

  {
    name: "bacterie",
    data: [10, 8, 8, 3],
  },
];

export const options = {
  chart:  {
    type: 'area',
    height:300,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2024-10-19T00:00:00.000Z",
      "2024-10-19T01:30:00.000Z",
      "2024-10-19T02:30:00.000Z",
      "2024-10-19T03:30:00.000Z",
      "2024-10-19T04:30:00.000Z",
      "2024-10-19T05:30:00.000Z",
      "2024-10-19T06:30:00.000Z",
    ],
  },
  yaxis: {
    title: {
      text: 'Energie',
    },
  },

};


// Analytics Cards Data
export const cardsData=[
  {
      title: "Energie_consommée",
      color:{
          background:"#fff",
      },
      barValue: 70,
      value:70,
      png:<UilBell />,
      series:[
          {
              name: "Energie_consommée",
              donnees: [31, 40, 28, 51, 42, 109, 100],
          },
      ],

  },
  {
      title: "Energie_produit",
      color:{
          background: "#fff",
         
      },
      barValue: 90,
      value:90,
      png:<UilBell />,
      series:[
          {
              name: "Energie_produit",
              data: [31, 40, 28, 51, 42, 109, 100],
          },
      ],

  },
  {
      title: "pourcentage_baterie",
      color:{
          background: "#fff",
      },
      barValue: 100,
      value:100,
      png:<UilBell />,
      series:[
          {
              name: "pourcentage_baterie",
              data: [31, 40, 28, 51, 42, 109, 100],
          },
      ],

  },
 
  {
      title: "Humidité",
      color:{
          background: "#fff",
          boxShadow:"0px 10px 20px 0px #",
      },
      barValue:35 ,
      value:35,
      png:<UilBell />,
      series:[
          {
              name: "Humidité",
              data: [31, 40, 28, 51, 42, 109, 100],
          },
      ],

  },
  {
    title: "Temperatre",
    color:{
        background: "#fff",
        boxShadow:"0px 10px 20px 0px #",
    },
    barValue:30 ,
    value:30,
    png:<UilBell />,
    series:[
        {
            name: "Temperatre",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
    ],

},
 
 
]