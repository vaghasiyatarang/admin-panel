import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function CommonRobot(props) {

  const { game, normal, random, smart } = props;
  return (
    <Box m="20px">
      <Card sx={{ maxWidth: 345, boxShadow: '2px 2px 6px 0px #0000002b' }}>
        <CardHeader
          sx={{ backgroundColor: "#3ca78b", color: "#fff",
          "& .css-1qbkelo-MuiCardHeader-content span":{
            fontFamily: 'inherit',
            fontWeight: 500
          }
         }}
          title={game}
        />
        <CardContent sx={{ backgroundColor: "#fff", color: "black" }}>
          <List dense component="div" role="list">
            <ListItem role="listitem">
              <ListItemIcon>
                <Checkbox
                  tabIndex={-1}
                  disableRipple
                  checked={random}
                  sx={{ color: "#3e4396" }}
                />
              </ListItemIcon>
              <ListItemText primary="Random Robot" />
            </ListItem>
          </List>
          <List dense component="div" role="list">
            <ListItem role="listitem">
              <ListItemIcon>
                <Checkbox
                  tabIndex={-1}
                  disableRipple
                  checked={normal}
                  sx={{ color: "#3e4396" }}
                />
              </ListItemIcon>
              <ListItemText primary="Normal Robot" />
            </ListItem>
          </List>
          <List dense component="div" role="list">
            <ListItem role="listitem">
              <ListItemIcon>
                <Checkbox
                  tabIndex={-1}
                  disableRipple
                  checked={smart}
                  sx={{ color: "#3e4396" }}
                />
              </ListItemIcon>
              <ListItemText primary="Smart Robot" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
