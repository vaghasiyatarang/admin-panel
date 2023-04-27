import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import Header from "../../components/Header";
import moment from "moment";
import { BASE_URL } from "../../config";

const styles = {
  table: {
    width: 400,
    margin: "auto",
  },
};

const RobotUser = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchItem, setSearchItem] = useState("");
  const [users, setUsers] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const fetchUserData = () => {
    fetch(`${BASE_URL}/robot-user`)
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

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box m="20px" mt="140px">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          className="commisionTitle"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Header title="ROBOT USER" />
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={(event) => setSearchItem(event.target.value)}
                sx={{ width: 300, height: "1.5rem" }}
              />
            </Grid>
          </Grid>

          {/* <Box p="20px">
            <CustomizedDialogs
              boxName="Add Chips"
              color="success"
              variant="contained"
              cancelColor="inherit"
            />
          </Box> */}
        </Box>
      </Box>
      <Paper>
        <TableContainer aria-label="customized table" component={Paper}>
          <Table
            aria-label="simple table"
            className={styles.table}
            sx={{ width: "100%" }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  NO.
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  PROFILE PICTURE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  USER NAME
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  MOBILE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  BALANCE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  A/C NAME
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  A/C NO
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  IFSC CODE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  UPI
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  REGDATE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  ISONLINE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  TBID
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length > 0 ? (
                <>
                  {users
                    // eslint-disable-next-line array-callback-return
                    .filter((user) => {
                      if (searchItem === "") {
                        return user;
                      } else if (
                        user.userName
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                      ) {
                        return user;
                      }
                      if (searchItem === "") {
                        return user;
                      } else if (
                        user.mobile
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                      ) {
                        return user;
                      }
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((user, index = 1) => (
                      <TableRow key={index}>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          <Avatar src="/">{user.userName || "NO"}</Avatar>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.userName}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.mobile}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.chips || "-"}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.bankDetails?.accountHolderName || "-"}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.bankDetails?.accountNumber || "-"}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.bankDetails?.IFSC || "-"}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.UPI || "-"}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {moment(user.regDate, "DD-MM-YYYY HH:mm:ss A").format(
                            "DD-MM-YYYY HH:mm:ss"
                          )}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.isOnline}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontSize: 14,
                            color: "#6e6b7b",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {user.tbid ?? "-"}
                        </TableCell>
                      </TableRow>
                    ))}
                </>
              ) : (
                <TableRow
                  sx={{
                    height: "250px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TableCell colSpan={12}>No Data!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ backgroundColor: "#e9ecef", fontWeight: "bolder" }}
        />
      </Paper>
    </Box>
  );
};

export default RobotUser;
