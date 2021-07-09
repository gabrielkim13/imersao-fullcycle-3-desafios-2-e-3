import React from 'react';

import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import RouteCard from '../components/RouteCard';

import axios from '../axios';
import { IRoute } from '../models';

interface IRoutesListPageProps {
  routes: IRoute[];
}

const RoutesListPage: NextPage<IRoutesListPageProps> = ({ routes }) => {
  return (
    <>
      <Head>
        <title>Imersão Full Cycle 3 - Rotas</title>
      </Head>

      <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
        Rotas
      </Typography>

      <Grid container spacing={4}>
        {routes.map(route => (
          <Grid key={route.id} item xs={12} sm={6} md={4}>
            <RouteCard route={route} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<IRoutesListPageProps> = async () => {
  const { data: routes } = await axios.get<IRoute[]>('routes');

  return { props: { routes } };
};

export default RoutesListPage;
