import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Header from "../../components/Header";
import moment from "moment";
import { BASE_URL } from "../../config";

const Commission = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchUserData = () => {
    fetch(`${BASE_URL}/commition-history`)
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
      <Box>
        <Box
          className="commisionTitle"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Header title="COMMISSION" />
        </Box>
      </Box>
      <Paper sx={{ boxShadow: "0 4px 24px 0 rgba(34, 41, 47, 0.1)" }}>
        <TableContainer aria-label="customized table" component={Paper}>
          <Table aria-label="simple table" className="commissionTable">
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
                  GAME ID
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
                  GAME
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
                  WAGER
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
                  COMMISSION
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
                  TIME
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
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
                        fontFamily: "inherit",
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {row.gameId}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        fontFamily: "inherit",
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {row.game}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        fontFamily: "inherit",
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {row.wager}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        fontFamily: "inherit",
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {row.commition}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        fontFamily: "inherit",
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {moment(row.cd, "DD-MM-YYYY HH:mm:ss A").format(
                        "DD-MM-YYYY HH:mm:ss"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
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
          sx={{ backgroundColor: "#e7e7e7", fontWeight: "bolder" }}
        />
      </Paper>
    </Box>
  );
};

export default Commission;
