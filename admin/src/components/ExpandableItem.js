import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Root = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: 4,
  margin: `${theme.spacing(2)}px auto`,
  padding: theme.spacing(2, 2, 2, 1.5),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 2),
  },
  cursor: 'pointer',
}));

const ExpandIconBox = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(2),
  },
}));

const ExpandableContent = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

// const ExpandableItemProps = {
//     title: "",
//     email: "",
//     number: null,
//     lastname: "",
//   };

  const ExpandableItem = ({ title, email, lastname, number, facility}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Root onClick={handleToggle}>
      <Box display="flex" alignItems="center">
        <ExpandIconBox>
          <IconButton
            size="small"
            aria-expanded={expanded}
            onClick={handleToggle}
          >
            <ExpandMoreIcon
              sx={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </IconButton>
        </ExpandIconBox>
        <Box flex={1}>
          <Typography variant="body1">{title}</Typography>
          
        </Box>
        <Box> {/*Accept and Decline Button here*/}
          <Button>Accept</Button>
          <Button>Decline</Button>
        </Box>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ExpandableContent
          container
          spacing={2}
          onClick={(event) => event.stopPropagation()}
        >
          
          {email}
         
        </ExpandableContent>
        <ExpandableContent
          container
          spacing={2}
          onClick={(event) => event.stopPropagation()}
        >
          
          
          {lastname}
         
        </ExpandableContent>
        <ExpandableContent
          container
          spacing={2}
          onClick={(event) => event.stopPropagation()}
        >
          
          
          {number}
          {facility}
        </ExpandableContent>
      </Collapse>
    </Root>
  );
};

export default ExpandableItem;