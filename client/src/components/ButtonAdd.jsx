import '../css/ButtonAdd.css';
import { Routes, Route, Link } from 'react-router-dom';

const ButtonAdd = (prop) => {
  return (
    <Link to = {prop.link} className="ButtonAdd">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path
          fill="currentColor"
          d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
        />
      </svg>
      {prop.text}
    </Link>
  );
};

export default ButtonAdd;
