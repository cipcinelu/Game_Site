import style from './../profileInfo.module.css'

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    
    return <div className={style.profileData}>
        <div>
            <b>Name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {!!profile.lookingForAJobDescription &&
            <div>
                <b>My professional skills</b>:{profile.lookingForAJobDescription}
            </div>}
        <div> {!!profile.aboutMe &&
            <div><b>About me</b>: {profile.aboutMe}</div>}
        </div>
        <div>
            {!!profile.contacts &&
                <div>
                    <b>My contacts</b>: 
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
    {isOwner && <div><button onClick = {goToEditMode}>edit</button></div>}
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div>
        <b>{contactTitle}</b>: <a href = {contactValue} 
                                target = '_blank' 
                                rel='noreferrer'>{contactValue}</a>
    </div>
}