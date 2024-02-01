/* eslint-disable react/prop-types */
import styles from './UserInfo.module.css'; 

function UserInfo({user}) {
  return (
    <div className={styles.container}>
       <img  className={styles.logoImg}src={user.avatar_url}  alt="github user avatar"/>
       <div>
         <p>{user.name}</p>
         <a href={user.html_url} target='_blank' rel="noreferrer">{`@${user.login}`}</a>
         <p>{user.bio?? 'This profile has no bio'}</p>
       </div>
       <div>
         <p>Joined {user.created_at}</p>
       </div>
       <div>
         <ul>
          <li>Repos 
             <p>{user.public_repos}</p>
          </li>
          <li>Followers
            <p>{user.followers}</p>
          </li>
          <li>Following
             <p>{user.following}</p>
          </li>
         </ul>
       </div>
       <div>
        <ul>
          <li>{user.location}</li>
          <li>{user.twitter_username?? 'Not available'}</li>
        </ul>
        <ul>
          <li> <a href={user.blog}>{user.blog}</a></li>
          <li>{user.company}</li>
        </ul>
       </div>
    </div>
  )
}

export default UserInfo