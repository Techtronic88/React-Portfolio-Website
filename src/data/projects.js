import starsound from "../assets/starsound.jpg";
import meditateApp from "../assets/MeditateApp.jpg";
import project3 from "../assets/project3.jpg";
// import { Link } from "react-router-dom"

const PROJECTS = [
    {
      id: 1,
      title: 'Star Sound',
      description: 'Seach, preview hit songs from your favorite artists ',
      link: '/music-master',
      image: starsound
    },
    {
      id: 2,
      title: 'Getaway Meditation',
      description: 'Refresh and relax with sounds and videos from nature',
      link: 'https://github.com',
      image: meditateApp
    },
    {
      id: 3,
      title: "Weather and Temperature update",
      description: 'Check temperature, weather of your favorite cities',
      link: 'https://quick-easy-weather-app.herokuapp.com/',
      image: project3
    }
  ];

  export default PROJECTS
  