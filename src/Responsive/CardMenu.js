import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { Button } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const useToggle = (initialState = false) => {
  const [isOn, setIsOn] = useState(initialState);
  const handleState = useCallback(() => setIsOn((isOn) => !isOn), []);

  return [isOn, handleState];
}

const ListCard = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    //props
    const {text, title} = props;

    //custom hooks useToggle
    const [isColorChanged, setIsColorChanged] = useToggle();

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ maxWidth: 345, backgroundColor: isColorChanged ? "navy" : "white" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" >
              {text}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader="21-11-2020"
          variant = 'h3'
        />
        <CardMedia
          component="img"
          height="194"
          image='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="dancing" component={'p'} color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>

        {/* pemakaian useToogle */}
        <Button onClick={setIsColorChanged}>
          Push to Switch
        </Button>
      </Card>
    );
};

//use proptypes
ListCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default ListCard
