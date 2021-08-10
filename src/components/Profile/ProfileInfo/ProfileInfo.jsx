import style from './profileInfo.module.css'
import withoutPhoto from '../../../img/withoutPhoto.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
import { useState } from 'react'
import ProfileDataForm from './ProfileData/ProfileDataForm'
import { ProfileData } from './ProfileData/ProfileData'

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }) => {

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

    return <div>
        <div className={style.descriptionBlock}>
            <div>
                <img className={style.avatar}
                    src={profile.photos.large || withoutPhoto}
                    alt='Аватарки нет :(' />
                {isOwner &&
                    <input type='file' onChange={onMainPhotoSelected} />}
            </div>
            <div className={style.profileData}>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile}
                                isOwner={isOwner}
                                goToEditMode={() => { setEditMode(true) }} />}
            </div>
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
}

export default ProfileInfo;