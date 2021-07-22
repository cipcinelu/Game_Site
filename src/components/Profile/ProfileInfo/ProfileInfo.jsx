import style from './profileInfo.module.css'
import withoutPhoto from '../../../img/withoutPhoto.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = ({profile, updateStatus, status}) => {

    return <div>
            {/* <img className = {style.headImage} src="https://ixbt.online/gametech/covers/2021/01/24/5feQSxEw1eNV7Vs9UNDARHLvFgTueSqHym4qXnvc.jpg" alt=""/> */}            
            <div className = {style.descriptionBlock}>
            <div> {profile.photos.large
               ? <img className = {style.avatar} src={profile.photos.large} alt = 'Аватарки нет :('/>
               : <img className = {style.avatar} src = {withoutPhoto} alt = 'Аватарки нет :('/> }
            </div>
            <div className = {style.profileName}>Имя: {profile.fullName}</div>
        </div>
        <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>

    </div>
}

export default ProfileInfo;