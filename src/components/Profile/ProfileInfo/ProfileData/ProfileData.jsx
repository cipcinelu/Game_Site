import { Box, Button, makeStyles, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        <Typography component = 'div'>
            <div>
                <Box component = "b">Name</Box>: {profile.fullName}
            </div>
            <div>
                <Box component = "b">Looking for a job </Box >: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
        {!!profile.lookingForAJobDescription &&
            <div>
                <Box component = "b">My professional skills</Box>: {profile.lookingForAJobDescription}
            </div>}
        <div> {!!profile.aboutMe &&
            <div><Box component = "b" >About me</Box>: {profile.aboutMe}</div>}
        </div>
        <div>
            {!!profile.contacts &&
                <div>
                    <Box component = "b">My contacts</Box>: 
                    {
                    Object.keys(profile.contacts).map(          
                        key => {
                        if (!!profile.contacts[key]) {
                        return <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={profile.contacts[key]}
                         />
                        } } 
                    )}
                </div>}
        </div>
        </Typography>
    {isOwner && 
        <div>
            <Button size='small' 
                    variant="contained" 
                    color="primary" 
                    component="span"
                    onClick = {goToEditMode}>
                edit
            </Button>
        </div>}
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <Typography>
        <Box component = 'b'>{contactTitle}</Box>: <a href = {contactValue} 
                                target = '_blank' 
                                rel='noreferrer'>{contactValue}</a>
    </Typography>
}