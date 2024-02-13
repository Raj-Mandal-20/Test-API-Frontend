import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Post(props) {
  return (
    <List md={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`http://localhost:8080/${props.imageUrl}`} />
        </ListItemAvatar>
        <ListItemText
          primary={props.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
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
