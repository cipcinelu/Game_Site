import React from 'react'
import style from '../Users.module.css'
import userPhoto from '../../../img/withoutPhoto.png'
import { NavLink } from 'react-router-dom';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        margin: 6,
        maxWidth: '80%'
    },
    userPhoto: {
        height: 200,
        width: 200,
    },
    button: {
        alignItems: 'flex-start',
        marginLeft: 'auto',
    },
}))

const User = ({ user, followingInProgress, follow, unfollow, ...props }) => {
    const styleUI = useStyles();
    let pagesCount = Math.ceil((props.totalUsersCount - 13100) / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <Card className = {styleUI.root}>
         <CardActionArea className={styleUI.userPhoto}
                        component = {NavLink}
                        to={'/profile/' + user.id}>
            <CardMedia
                image={user.photos.small != null ? user.photos.small : userPhoto}
                title="Avatar"
                className={styleUI.userPhoto}/>
        </CardActionArea>
        <CardContent>
            <span>
                <Typography>{user.name}</Typography>
                <Typography>{user.status}</Typography>
            </span>
        </CardContent>
        <CardActions className = {styleUI.button}>
                {user.followed
                    ? <Button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => unfollow(user.id)}
                        variant="contained"
                        color='primary'>Unfollow</Button>
                    : <Button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => follow(user.id)}
                        variant="contained"
                        color='primary'>Follow</Button>
                }
        </CardActions>
    </Card>
}



export default User;