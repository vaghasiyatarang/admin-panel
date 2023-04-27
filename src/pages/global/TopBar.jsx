import React from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  useTheme,
  Button,
} from "@mui/material";
import { CgMenuGridO } from "react-icons/cg";
import { useProSidebar } from "react-pro-sidebar";
import { tokens } from "../../utils/theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TopBar = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleSidebar, broken, rtl } = useProSidebar();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const adminName = JSON.parse(localStorage.getItem("data"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    navigate("/");
    props.removeDatas();
    localStorage.removeItem("select_tab");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="-webkit-fill-available"
      boxShadow="2px 2px 6px 0px #0000002b"
      backgroundColor={colors.adminColor["headerBg"]}
      sx={{ position: "fixed", top: 0, zIndex: 999, padding: "12.2px" }}
    >
      <Box display="flex">
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <CgMenuGridO
              color={colors.adminColor["textColor"]}
              fontSize="26px"
            />
          </IconButton>
        )}
      </Box>
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar
            src="/static/images/avatar/1.jpg"
            alt={adminName.data[0].username}
          />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default TopBar;
