import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 8,
        padding: 16,
    },
    date: {
        
    },

});

function BlogCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined" color="primary.main">
            <h3 color="primary.main">{props.title}</h3>
            <h4>{props.date}</h4>
            <h4 color="text.secondary">{props.desc}</h4>
        </Card>
    );
}

export default BlogCard;