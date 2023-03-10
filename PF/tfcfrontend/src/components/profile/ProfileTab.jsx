import {React, useEffect, useState, useContext} from 'react'
import AuthContext from '../../api/AuthContext'
import { getProfile } from '../../api/requests'
import Profile from './Profile'

function ProfileTab() {
    let {token} = useContext(AuthContext)

    let [user, setUser] = useState()
    
    useEffect(() => {
        getProfile(setUser, token)
    }, [token])

    return (
    <div>
        {user && <Profile user={user} setUser={setUser}></Profile>}
    </div>
    )
}

export default ProfileTab