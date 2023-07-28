import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import wifi from "../asset/images/pub/wifi.png";
import laundry from "../asset/images/pub/laundry.png";
import security from "../asset/images/pub/security.png";
import lobby from "../asset/images/pub/lobby.png";
import motor from "../asset/images/pub/motor.png";
import bike from "../asset/images/pub/bike.png";
import car from "../asset/images/pub/car.png";
import relax from "../asset/images/pub/relax.png";
import garden from "../asset/images/pub/garden.png";
import toilet from "../asset/images/pub/toilet.png";
import gazebo from "../asset/images/pub/gazebo.png";
import hanger from "../asset/images/pub/hanger.png";
import '../style/tailwind.css';


export default function FolderList() {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={wifi} alt="Wifi Icon">
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Wifi" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={laundry} alt="Laundry Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Laundry" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={security} alt="security Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Security" />
          </ListItem>
        </List>
      </Grid>


      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={motor} alt="motor Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Parkir Motor" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={bike} alt="bike Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Parkir Sepeda" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={car} alt="car Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Parkir Mobil" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={relax} alt="relax Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="R.Santai" />
          </ListItem>
        </List>
      </Grid>


      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={lobby} alt="loby Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Lobby" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={garden} alt="garden Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Taman" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={gazebo} alt="gazebo Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Gazebo" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={toilet} alt="toilet Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="K.Mandi Luar" />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} sm={6} md={2}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={hanger} alt="hanger Icon">
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="R. Jemur" />
          </ListItem>
        </List>
      </Grid>

    </Grid>

  );
}
