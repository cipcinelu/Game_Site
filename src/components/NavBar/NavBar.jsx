import { NavLink } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, MenuItem } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FaceIcon from '@material-ui/icons/Face';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerPaper: {
        width: `20%`,
    },
}))

const Navbar = (props) => {
    const styleUI = useStyles();

    return <Drawer
        onClose={() => props.setDrawerOpen(false)}
        onOpen={() => props.setDrawerOpen(true)}
        open={props.isDrawerOpen}
        variant="persistent"
        classes={{
            paper: styleUI.drawerPaper,
        }}>
        <div className={styleUI.drawerHeader}>
            <IconButton 
                onClick={() => props.setDrawerOpen(false)}>
                <ChevronLeftIcon />
            </IconButton>
        </div>
        <Divider/>
        <List>
            {modListItem(FaceIcon, '/profile', 'Profile')}
            {modListItem(MessageIcon, '/dialogs', 'Messeges')}
            {modListItem(PeopleIcon, '/users', 'Users')}
            {modListItem(SettingsIcon, '/profile', 'Settings')}
        </List>
    </Drawer>
}
export default Navbar

const modListItem = (Component, link, text) => {
    return (
        <ListItem button component={NavLink} to={link}>
            <ListItemIcon>
                <Component />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    )
}