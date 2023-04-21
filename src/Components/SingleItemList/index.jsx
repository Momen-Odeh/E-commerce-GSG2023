import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { List } from "@mui/material";
import { useState } from "react";
import './style.css'
const SingleItemList = ({ listItems }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderListItem = (item) => {
    if (item.children) {
      return (
        <div key={item.text}>
          <ListItemButton onClick={handleClick} className="menu" sx={{width:"250px"}}>
            <ListItemText primary={item.text} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <SingleItemList listItems={item.children} />
            </List>
          </Collapse>
        </div>
      );
    } else {
      return (
        <ListItemButton key={item.text}>
          <ListItemText primary={item.text} />
        </ListItemButton>
      );
    }
  };

  return (
    <List sx={{ ml: "135px" }}>
      {listItems.map((item) => renderListItem(item))}
    </List>
  );
};

export default SingleItemList;
