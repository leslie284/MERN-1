import React, { Component } from "react";
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
} from "@material-ui/core";
import { history } from "./../../../healper/history";
import container, { MapDispatchToProps, MapStateToProps } from "./container";
import { Album } from "../../../reducers/types/album";

const style = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: "auto",
      padding: "0px 50px 10px 50px",
    },
    card: {
      margin: 10,
      height: 80,
      background: "#06bff1",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    media: {
      height: 150,
    },
  });

export type Props = WithStyles & MapDispatchToProps & MapStateToProps;

export class AlbumList extends Component<Props> {
  componentDidMount() {
    this.props.getAllAlbum();
  }
  viewAllPhotos = (id: number) => {
    history.push(`/album/${id}/photos`);
  };

  renderAlbums = () => {
    const {
      album: { albums },
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          {albums.map((a: Album) => {
            return (
              <Grid item lg={3} key={a.id}>
                <Card
                  onClick={() => this.viewAllPhotos(a.userId)}
                  className={classes.card}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {a.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>{" "}
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };

  render() {
    return (
      <Grid spacing={1} container>
        <Grid item lg={12}>
          {this.renderAlbums()}
        </Grid>
      </Grid>
    );
  }
}

export default container(withStyles(style)(AlbumList));
