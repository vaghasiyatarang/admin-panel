import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { useSidebarContext } from "./sidebarContext";
import { Link } from "react-router-dom";
import { tokens } from "../../../utils/theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import { AiFillCaretLeft } from "react-icons/ai";
// react icons
import { MdLandscape } from "react-icons/md";
import {
  FaGamepad,
  FaRegMoneyBillAlt,
  FaUserAlt,
  FaBan,
  FaRobot,
} from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import gameLogo from "../../image/gameLogo.jpeg";
import GradeIcon from "@mui/icons-material/Grade";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useEffect } from "react";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const LOCAL_STORAGE_KEY = "select_tab";
  const [selected, setSelected] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || "Dashboard"
  );
  const { sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selected));
  }, [selected]);

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        color: "white",
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        // "& .sidebar-inner":{
        //   position: "fixed",
        //   width: "15%",
        // },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
          minWidth: "44px",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
          transition: "margin-left 0.2s",
        },
        "& .menu-item a": {
          height: "40px",
        },
        "& .menu .css-6nywfz h6": {
          display: {},
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.adminColor["linkColor"]} !important`,
          marginLeft: "0.7rem",
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `white !important`,
          backgroundColor: `${colors.greenAccent[500]} !important`,
          width: "90%",
          margin: "auto",
          borderRadius: "0.4rem",
          display: "block",
          boxShadow: "0 0 10px 1px rgb(60 167 139)",
        },
        "& .menu-item.active a span p": {
          fontWeight: "600",
          fontFamily: "inherit",
          letterSpacing: "0.5px",
        },
        "& .payoutIcon": {
          marginLeft: "0.999rem",
        },
        "& .payoutIcon .css-cveggr-MuiListItemIcon-root": {
          minWidth: "43px",
        },
        "& .payoutIcon .css-cveggr-MuiListItemIcon-root svg": {
          color: "inherit",
          height: "1rem",
          width: "1rem",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        backgroundColor={colors.adminColor["headerBg"]}
        color={colors.adminColor["textColor"]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            className="main-logo"
            icon={
              collapsed && (
                <CgMenuGridO
                  fontSize="26px"
                  onClick={() => collapseSidebar()}
                  className="menu__humbugger"
                />
              )
            }
            style={{ margin: "20px 0" }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="2px"
              >
                <img src={gameLogo} className="menu-icon" alt="logo" />
                <IconButton
                  className="icon"
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <AiFillCaretLeft color={colors.adminColor["textColor"]} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box color={colors.adminColor["textColor"]}>
            <Typography
              variant="h6"
              color={colors.adminColor["linkColor"]}
              sx={{ m: "15px 20px 5px 8px" }}
            >
              Main
            </Typography>
            <Item
              title="Dashboard"
              to="/"
              icon={<MdLandscape />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Game History"
              to="/game-history"
              icon={<FaGamepad />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Deposit History"
              to="/deposit-history"
              icon={<FaRegMoneyBillAlt />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Commission History"
              to="/commission-history"
              icon={<FaGamepad />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* All User Details */}
            <Typography
              variant="h6"
              color={colors.adminColor["linkColor"]}
              sx={{ m: "15px 20px 5px 6px" }}
            >
              Transaction
            </Typography>
            <Item
              title="Reward"
              to="/reward"
              icon={<GradeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Case"
              to="/add"
              icon={<AddShoppingCartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Withdraw"
              to="/withdraw"
              icon={<PublishedWithChangesIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Game Transaction"
              to="/gameTransaction"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.adminColor["linkColor"]}
              sx={{ m: "15px 20px 5px 8px" }}
            >
              User
            </Typography>
            <Item
              title="Game User"
              to="/game-user"
              icon={<FaUserAlt />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Blocked User"
              to="/blocked-user"
              icon={<FaBan />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Robot user"
              to="/robot-user"
              icon={<FaRobot />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Robot Management"
              to="/robot-management"
              icon={<FaRobot />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* All Game Details */}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
