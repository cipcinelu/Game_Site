import style from './profileInfo.module.css'

const ProfileInfo = (props) => {

    return <div>
            <img className = {style.headImage} src="https://ixbt.online/gametech/covers/2021/01/24/5feQSxEw1eNV7Vs9UNDARHLvFgTueSqHym4qXnvc.jpg" alt=""/>
            <div className = {style.descriptionBlock}>
            <div><img className = {style.avatar} src={props.profile.photos.large} alt="фото нет :(" /></div>
            <div className = {style.profileName}>Имя: {props.profile.fullName}</div>
        </div>
    </div>
}

export default ProfileInfo;