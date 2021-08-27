import withoutPhoto from '../../../img/withoutPhoto.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
import { useState } from 'react'
import ProfileDataForm from './ProfileData/ProfileDataForm'
import { ProfileData } from './ProfileData/ProfileData'
import { makeStyles, Card, CardMedia, Dialog, Grid, CardActionArea, DialogTitle, DialogContent } from '@material-ui/core'
import { DropzoneArea } from 'material-ui-dropzone';
import BackupIcon from '@material-ui/icons/Backup';

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
    profileData: {
        padding: `4%`,
    },
    descriptionBlock: {
        marginTop: `2%`,
    }
}));

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }) => {
    const styleUI = useStyles();
    let [editMode, setEditMode] = useState(false);
    const [open, setOpen] = useState(false);

    const onMainPhotoSelected = (photo) => {
        if (photo[0]) {
            savePhoto(photo[0])
            setOpen(false)
        }
    }

    const onSubmit = (formData) => { // получаем данные
        saveProfile(formData).then((e) => { // если промис вернётся, то код выполнится
            setEditMode(false)
        }).catch(
            (e) => {
                console.log('error text')
            }
        )  //  промис не выернулся :(
    }

    const handleClickOpen = () => {
        if (isOwner) {
            setOpen(true);
        }
    };
    const handleClose = () => {
        setOpen(false);
    }

    return <div className={styleUI.descriptionBlock}>
        {isOwner &&
        <Dialog open={open}
                onClose={handleClose}>
            <DialogTitle aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                Do you want change your avatar?
            </DialogTitle>
            <DialogContent>
                <DropzoneArea acceptedFiles={['image/*']}
                    dropzoneText={"Drag and drop an image here or click"}
                    onChange={(files) => onMainPhotoSelected(files)}
                    Icon = {BackupIcon} />
            </DialogContent>
        </Dialog>
}
        <Grid container spacing={1} justifyContent="center">
            <Grid item >
                <Card>
                    <CardActionArea component="button"
                                    onClick={handleClickOpen}>
                        <CardMedia height="230"
                            component="img"
                            image={profile.photos.large || withoutPhoto}
                            alt='Аватарки нет :(' />
                    </CardActionArea>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
                </Card>
            </Grid>
            <Grid item xs={12} sm>
                <Card className={styleUI.profileData}>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData profile={profile}
                            isOwner={isOwner}
                            goToEditMode={() => { setEditMode(true) }} />}
                </Card>
            </Grid>
        </Grid>
    </div>
}

export default ProfileInfo;