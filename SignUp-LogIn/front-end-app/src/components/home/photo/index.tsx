import React, { Component } from "react";
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Paper,
} from "@material-ui/core";
import container, { MapDispatchToProps, MapStateToProps } from "./container";
import { Photo } from "../../../reducers/types/photo";
import { RouteComponentProps } from "react-router-dom";
import { history } from "../../../healper/history";
import NavBar from "../navbar";

const style = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "auto",
      padding: "0px 50px 10px 50px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    media: {
      height: 150,
    },
    gotoBackbtn: {
      padding: "0px 0px 17px 49px",
    },
  });
export type AlbumParams = {
  id: string;
};
export type Props = WithStyles &
  MapDispatchToProps &
  MapStateToProps &
  RouteComponentProps<AlbumParams>;

export class PhotoList extends Component<Props> {
  componentDidMount() {
    const { match } = this.props;
    this.props.getAllPhotos(match.params.id);
  }

  gotoDashboard = () => {
    history.push("/home");
  };
  renderPhotos = () => {
    const {
      photo: { photos },
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          {photos.map((p: Photo) => {
            return (
              <Grid item lg={3} key={p.id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={p.thumbnailUrl}
                      title="Contemplative Reptile"
                      component="img"
                    />
                    <CardContent style={{ height: "50px" }}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {p.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid spacing={4} container>
        <Grid item lg={12}>
          <NavBar />
          <Grid container>
            <Grid item lg={6} className={classes.gotoBackbtn}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.gotoDashboard}
              >
                Backto Dashboard
              </Button>
            </Grid>
          </Grid>
          {this.renderPhotos()}
        </Grid>
      </Grid>
    );
  }
}

export default container(withStyles(style)(PhotoList));
