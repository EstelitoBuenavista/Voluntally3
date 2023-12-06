import '../css/ButtonDropdown.css';

const ButtonDropdown = (props) => {
  return (
    <button className="ButtonDropdown">
      {props.text}
      <svg
        className="ButtonDropdown__icon--dropdown"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 22"
      >
        <title>chevron-down</title>
        <path
          fill="currentColor"
          d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
        />
      </svg>
    </button>
  );
};

export default ButtonDropdown;
