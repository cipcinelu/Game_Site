import style from './profileInfo.module.css'
import withoutPhoto from '../../../img/withoutPhoto.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
import { useState } from 'react'
import ProfileDataForm from './ProfileData/ProfileDataForm'
import { ProfileData } from './ProfileData/ProfileData'
import { Avatar, Button, makeStyles } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(28),
        height: theme.spacing(28),
    },
    upload: {
        float:'right',
    },
    input: {
        display: 'none',
      },
    avatarBlock: {
        backgroundColor: 'white',
        padding: `1%`,
    },
    avatarBottom: {
        marginTop: `3%`
    }
}));

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }) => {
    const styleUI = useStyles();
    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
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

    return <div className={style.descriptionBlock}>
    <div  className = {styleUI.avatarBlock}>
        <Avatar className={styleUI.avatar}
                variant="rounded"
                src={profile.photos.large || withoutPhoto}
                alt='Аватарки нет :(' />
        <div className = {styleUI.avatarBottom}>
        {isOwner &&
            <div className = {styleUI.upload}>
                <input className = {styleUI.input}
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        onChange={onMainPhotoSelected} />
                <label htmlFor="contained-button-file">
                    <Button size='small' variant="contained" color="primary" component="span">
                        <PhotoCamera/>
                    </Button>
                </label>
            </div>
        }
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>
    <div className={style.profileData}>
        {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileData profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => { setEditMode(true) }} />}
    </div>
</div>
}

export default ProfileInfo;