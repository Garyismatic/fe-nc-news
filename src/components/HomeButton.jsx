import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

function NavMenu({ setTopic, setSort }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setSort("");
    setTopic("");
    navigate("/");
  };

  return (
    <>
      <div className="home-button">
        <IconButton aria-label="home-button" onClick={handleClick} size="large">
          <HomeIcon fontSize="Large" />
        </IconButton>
      </div>
    </>
  );
}

export default NavMenu;
