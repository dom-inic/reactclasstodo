import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Todos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((todo, index) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ minWidth: 275 }} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {todo.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  {todo.completed === true ? (
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox disabled defaultChecked />}
                        label="Completed"
                      />
                    </FormGroup>
                  ) : (
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox disabled />}
                        label="no completed"
                      />
                    </FormGroup>
                  )}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default memo(Todos);
