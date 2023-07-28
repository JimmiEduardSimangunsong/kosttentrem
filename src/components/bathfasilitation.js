import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import seattoilet from "../asset/images/broom/seattoilet.png";
import shower from "../asset/images/broom/shower.png";
import squattoilet from "../asset/images/broom/squattoilet.png";
import bathroom from "../asset/images/broom/bathroom.png";
import bumf from "../asset/images/broom/bumf.png";
import '../style/tailwind.css';

export default function AlignItemsList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="seat toilet" src={seattoilet} />
          </ListItemAvatar>
          <ListItemText
            primary="toilet Duduk"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Khusus Kamar ber-AC
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src={shower} />
          </ListItemAvatar>
          <ListItemText
            primary="Shower"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Semua Kamar Mandi Memiliki Fasilitas ini
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src={squattoilet} />
          </ListItemAvatar>
          <ListItemText
            primary=" Toilet Jongkok"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Semua Kamar Mandi Tidak ber-AC Memiliki Fasilitas ini
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="seat toilet" src={bathroom} />
          </ListItemAvatar>
          <ListItemText
            primary="kamarmandi luar"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  untuk kamar tidak ber-AC
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="seat toilet" src={bumf} />
          </ListItemAvatar>
          <ListItemText
            primary="Gantungan Handuk"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Semua Kamar Mandi Memiliki Fasilitas ini
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>

      </List>
    </div>
  );
}