import React, { useState } from "react";
import { motion } from "framer-motion";
import fscube from "../logos/fscubewhite.png";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBuildingColumns, faPeopleGroup, faCheckToSlot, faFlaskVial } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'


function Navbar() {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: "Home",
      icon: <FontAwesomeIcon icon={faBuildingColumns} />,
    },
    {
      name: "Who We Are",
      icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    },
    {
      name: "Delegate Platform",
      icon: <FontAwesomeIcon icon={faCheckToSlot} />,
    },
    {
      name: "Research & Content",
      icon: <FontAwesomeIcon icon={faFlaskVial} />,
    },
    { name: "Twitter", icon: <FontAwesomeIcon icon={faTwitter} /> },
    {
      name: "Medium Blog",
      icon: <FontAwesomeIcon icon={faMedium} />,
    },
  ];

  return (
    <div className="header-main">
      <div className="logo">
        <a
          href="https://flipsidecrypto.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={fscube}
            className="fs-logo"
            alt="flipside"
          />{" "}
        </a>
      </div>
      <div className="header-nav">
        <h4 onClick={() => setOpen(true)}>Who We Are</h4>
        <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)} >
          {data.map((item, index) => (
            <ListItem onClick={() => setOpen(false)}>
              <ListItemIcon>{item["icon"]}</ListItemIcon>
              <ListItemText primary={item["name"]} />
            </ListItem>
          ))}
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
