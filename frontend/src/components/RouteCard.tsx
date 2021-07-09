import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Map from '@material-ui/icons/Map';

import { ILatLong, IRoute } from '../models';

interface IRouteCardProps {
  route: IRoute;
}

function getGoogleMapsLink({ latitude, longitude }: ILatLong): string {
  return `https://www.google.com.br/maps/@${latitude},${longitude},5z`;
}

const RouteCard: React.FC<IRouteCardProps> = ({ route: { title, startPosition, endPosition } }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Grid container>
          <Grid item xs={6}>
            <Typography color="primary" variant="h6">Início</Typography>

            <ListItemText primary="Latitude" secondary={startPosition.latitude} />
            <ListItemText primary="Longitude" secondary={startPosition.longitude} />
          </Grid>

          <Grid item xs={6}>
            <Typography color="primary" variant="h6">Destino</Typography>

            <ListItemText primary="Latitude" secondary={endPosition.latitude} />
            <ListItemText primary="Longitude" secondary={endPosition.longitude} />
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button component="a" size="small" color="primary" href={getGoogleMapsLink(startPosition)}>
          <Map style={{ marginRight: 8 }} /> Início
        </Button>

        <Button component="a" size="small" color="primary" href={getGoogleMapsLink(endPosition)}>
          <Map style={{ marginRight: 8 }} /> Destino
        </Button>
      </CardActions>
    </Card>
  );
};

export default RouteCard;
