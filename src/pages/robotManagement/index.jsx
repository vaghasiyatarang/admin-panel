import React, { useEffect, useState } from "react";
import CommonRobot from "../../utils/CommonRobot";
import { Box, Grid } from "@mui/material";
import Header from "../../components/Header";
import { BASE_URL } from "../../config";

export default function RobotManagement() {
  const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch(`${BASE_URL}/robot-management`)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setUsers(datas.data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Box m="20px" mt="140px">
      <Box
        className="commisionTitle"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Header title="ROBOT MANAGEMENT" />
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        className="123"
        height="70vh"
      >
        {users.map((user) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={user.game}>
            <Box>
              <CommonRobot
                game={user.game}
                normal={user.normal}
                random={user.random}
                smart={user.smart}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
