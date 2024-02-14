import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Style } from '@mui/icons-material';

export default function Post(props) {
  return (
    <List md={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <ListItem alignItems="center">
        <ListItemAvatar slot='5'>
          <Avatar alt="Remy Sharp" src={`http://localhost:8080/${props.imageUrl}`} sx={{ width: 80, height: 80 }} />
        </ListItemAvatar>
        <ListItemText  sx={{marginLeft : 2, fontWeight : 'bold'}}
          primary={props.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body1"
                color="text.primary"
                
              >
                {props.describe}
              </Typography>
              {` — Networth : ${props.prize}$`}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
