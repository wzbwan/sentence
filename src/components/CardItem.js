import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardItem.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import Typewriter from './Typewriter';

const styles = {
    card:{
        
    },
    media: {
        height: 600,
    },
    grid: {
        flexGrow: 1,
    }

};

class CardItem extends Component {
    state = {
        dialogOpen : false
    }

    render() {
        const { classes } = this.props
        const { backgroundColor, title, content, preview, previewWidth, } = this.props.data
        const style = {
            card: {
                backgroundColor: backgroundColor,
            },
            content: {
                minHeight: 350,
                display: "flex",
                alignItems: "center",
            },
            textContainer: {
                display: "flex",
                alignItems: "center",
            },
            text: {
                color: "#F0F2F5"
            },
            btn:{
                color:"#F0F2F5"
            }
        }
        return (
            
            <Card style={style.card}>
                <CardContent style={style.content}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <div style={{textAlign:'center'}}>
                            <h2 style={style.text}>
                                {title}
                            </h2>
                            <span style={style.text}>
                                {content}
                            </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <img src={preview} width={previewWidth ? previewWidth : ""} />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size="small" style={style.btn} href="https://zengbao.wang/zy">
                        2016
                    </Button>
                    <Button size="small" style={style.btn} href="https://zengbao.wang/zy2017">
                        2017
                    </Button>
                    <Button size="small" style={style.btn} onClick={()=>{
                        this.setState({dialogOpen:true})
                    }}>
                        2018
                    </Button>
                    
                </CardActions>
                <CodingDialog dialogOpen={this.state.dialogOpen} closeDialog={()=>{this.setState({dialogOpen:false})}} />
            </Card>
                       
        );
    }
}

class CodingDialog extends Component{
    handleClose= ()=>{

    }
    render(){
        return (
            <Dialog open={this.props.dialogOpen} onClose={this.props.closeDialog}>
                <DialogTitle id="simple-dialog-title">你好像没有权限访问😰</DialogTitle>
            </Dialog>
        )
    }
}

CardItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardItem);
// export default CardItem;