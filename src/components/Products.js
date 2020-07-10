import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Products.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: [
        { backgroundColor: '#ECE9E9',height:226},
        { backgroundColor: '#FFE324',height:226},
        { backgroundColor: '#987FF1',height:226},
        { backgroundColor: '#1F1F1F',height:226},
        { backgroundColor: '#4FD2E5',height:226},
        { backgroundColor: '#F60C3E',height:226},
    ],
    media: {
        height: 600,
    },
    grid: {
        flexGrow: 1,
    }
};

class Products extends Component {
    state = {
        launch: true,
        // blog:[], https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/Download_on_the_App_Store_Badge.svg
        products:[
            {
                backgroundColor:'#ECE9E9',
                textColor:'#434240',
                title:"内蒙古人事考试",
                content:"随时随地查看内蒙古人事考试信息网及各地市人事考试信息公告。更有公务员考试职位表筛选、企业招聘信息等功能。",
                preview:"https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/02.gif",
                previewWidth:"128",
                url: "https://itunes.apple.com/cn/app/%E5%86%85%E8%92%99%E4%BA%BA%E4%BA%8B%E8%80%83%E8%AF%95/id1025444457?mt=8",
                detailUrl: "https://zengbao.wang/nmgrs/home.html",
                visitIcon:"https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/Download_on_the_App_Store_Badge.svg",
                actionItem: {
                    href: true,
                    text: "Learn More",
                },
            },
            {
                backgroundColor: '#FFE324',
                textColor: '#434240',
                title: "作-息",
                content: "做一份作息时间表，提醒自己一天中每个时间段该干什么。",
                preview: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/04.gif",
                previewWidth: "128",
                url: "https://itunes.apple.com/cn/app/work-rest/id999334835?mt=8",
                detailUrl: "https://zengbao.wang/work_rest_help.html",
                visitIcon: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/Download_on_the_App_Store_Badge.svg",
                actionItem: {
                    href: true,
                    text: "Learn More",
                },
            },
            {
                backgroundColor: '#987FF1',
                textColor: '#434240',
                title: "二叉树",
                content: "学习二叉树 前序遍历,中序遍历,后序遍历/遍历过程可用动画效果演示/每个节点都可以自定义名称。",
                preview: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/03.gif",
                previewWidth: "128",
                url: "https://itunes.apple.com/cn/app/b-tree-binary-tree/id1064830420?mt=8",
                visitIcon: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/Download_on_the_App_Store_Badge.svg",
                actionItem: {
                    href: true,
                    text: "Learn More",
                },
            },
            {
                backgroundColor: '#1F1F1F',
                textColor: '#F0F2F5',
                title: "彩虹碎片",
                content: "一款操作简单却很难拿到高分的消除类游戏",
                preview: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/01.gif",
                previewWidth: "128",
                url: "https://itunes.apple.com/cn/app/%E5%BD%A9%E8%99%B9%E7%A2%8E%E7%89%87/id925238633?mt=8",
                visitIcon: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/Download_on_the_App_Store_Badge-white.svg",
                actionItem: {
                    href: true,
                    text: "Learn More",
                },
            },
            {
                backgroundColor: '#4FD2E5',
                textColor: '#434240',
                title: "FlashTelegram",
                content: " 用闪光灯传递二进制信息？这脑洞也是够可以的。",
                preview: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/01.gif",
                previewWidth: "128",
                url: "https://itunes.apple.com/cn/app/flashtelegram/id843293116?mt=8",
                visitIcon: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/Download_on_the_App_Store_Badge.svg",
                actionItem: {
                    href: true,
                    text: "Learn More",
                },
            },
            {
                backgroundColor: '#F60C3E',
                textColor: '#F0F2F5',
                title: "TypeWriter.js",
                content: "用来实现打字机效果的React.js组件库。什么意思？你刚刚看到的自我介绍便是。",
                preview: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/01.gif",
                previewWidth: "128",
                url: "https://github.com/",
                visitIcon: "https://zengbaowang-app.oss-cn-beijing.aliyuncs.com/imgs/github-icon.svg",
                visitIconWidth:"30",
                actionItem: {
                    href:false,
                    text:"再看一次启动画面？",
                    action: () => { this.props.reloading()}
                },
            }
        ]
    }

    render() {
        const { classes } = this.props
        let productsComponents = []
        this.state.products.map((item,index)=>{
            productsComponents.push(<Product key={index} data={item} />)
        })
        return (
            <div className="Products">
                <div>
                    <Grid container className={classes.grid} spacing={16}>
                        {productsComponents}
                    </Grid>
                    
                </div>
            </div>
        );
    }
}

class Product extends Component{
    render(){
        const { backgroundColor, textColor, title, content, preview, previewWidth, url, visitIcon, actionItem } = this.props.data
        const style = {
            card:{
                backgroundColor: backgroundColor,
                
            },
            content:{
                minHeight: 350,
                display: "flex",
                alignItems: "center",
            },
            text:{
                color: textColor
            },
            visiteIcon:{
                
                
            }
        }
        return (
            <Grid item xs={12} md={6}>
                <Card  style={style.card}>
                <CardContent style={style.content}>
                    <Grid container>
                        
                        <Grid item xs={12} md={8}>
                            <h2 style={style.text}>
                                {title}
                            </h2>
                            <span style={style.text}>
                                {content}
                            </span>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <img src={preview} width={previewWidth} />

                        </Grid>
                        
                    </Grid>

                </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={url}>
                            <img src={visitIcon} width={this.props.data.visitIconWidth ? this.props.data.visitIconWidth : '80'} />
                        </Button>
                        <Button size="small" color="primary" href={this.props.data.detailUrl ? this.props.data.detailUrl : ""} onClick={actionItem.href?null:actionItem.action}>
                            {actionItem.text}
                        </Button>
                    </CardActions>
            </Card>
        </Grid>
        )
    }
}

Products.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
