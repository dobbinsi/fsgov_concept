import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBuildingColumns,
  faPeopleGroup,
  faCheckToSlot,
  faFlaskVial,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";

import fscube from "../logos/fscubewhite.png";
import { motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  header: {
    color: "#f0ffff",
    padding: "30px",
    border: "1px solid rgb(255, 255, 255, 0.23)",
    background: "rgba(45, 45, 45, 0.226)",
    backdropFilter: "saturate(180%) blur(8px)",
    minHeight: "150px",
    maxHeight: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    fontWeight: "light",
    "@media (max-width: 900px)": {
      minHeight: "150px",
      maxHeight: "150px",
    },
  },
  menuButton: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "light",
  },
  drawerContainer: {
    padding: "20px 30px",
    color: "inherit",
  },
  paper: {
    color: "#f0ffff",
    paddingTop: "30px",
    border: "1px solid rgb(255, 255, 255, 0.23)",
    background: "rgba(45, 45, 45, 0.226)",
    backdropFilter: "saturate(180%) blur(8px)",
    borderRadius: "15px",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: 60,
    textAlign: "center",
    paddingBottom: "100px",
  },
  typography: {
    fontSize: "45px",
    fontFamily: "Courier Prime",
    fontWeight: "400",
  },
}));

const headersData = [
  {
    label: "Home",
    href: "/",
    icon: <FontAwesomeIcon icon={faBuildingColumns} color="#f0ffff" />,
  },
  {
    label: "Who We Are",
    href: "/about",
    icon: <FontAwesomeIcon icon={faPeopleGroup} color="#f0ffff" />,
  },
  {
    label: "Delegate Platform",
    href: "/delegate",
    icon: <FontAwesomeIcon icon={faCheckToSlot} color="#f0ffff" />,
  },
  {
    label: "Research & Content",
    href: "/content",
    icon: <FontAwesomeIcon icon={faFlaskVial} color="#f0ffff" />,
  },
];

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsivness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({
            ...prevState,
            mobileView: false,
            drawerOpen: false,
          }));
    };

    setResponsivness();
    window.addEventListener("resize", () => setResponsivness());

    return () => {
      window.removeEventListener("resize", () => setResponsivness());
    };
  }, []);

  const {
    paper,
    header,
    menuButton,
    toolbar,
    drawerContainer,
    footer,
    typography,
  } = useStyles();
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <div className="logo-title">
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
          <Typography className={typography}>Governance</Typography>
        </div>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, icon }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <ListItem>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      );
    });
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <Drawer
          classes={{ paper }}
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices()}
            <div>
              <List className={footer}>
                <ListItem>
                  <ListItemIcon>
                    {<FontAwesomeIcon icon={faTwitter} color="#f0ffff" />}
                  </ListItemIcon>
                  <ListItemText>Twitter</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    {<FontAwesomeIcon icon={faMedium} color="#f0ffff" />}
                  </ListItemIcon>
                  <ListItemText>Medium</ListItemText>
                </ListItem>
              </List>
            </div>
          </div>
        </Drawer>
        <div className="header-main">
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
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
