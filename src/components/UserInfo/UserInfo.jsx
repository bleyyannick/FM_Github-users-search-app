/* eslint-disable react/prop-types */
import styles from './UserInfo.module.css'; 

function UserInfo({user}) {

  const formattedDate = new Date(`${user.created_at}`).toLocaleString('en-us', {month: "short", year:"numeric", day:"numeric"}); 
  return (
    <main className={styles.container}>
      <section className={styles.userDescription}>
       <img className={styles.logoImg} src={user.avatar_url}  alt="github user avatar"/>
       <div className={styles.textDescription}>
         <h1>{user.name}</h1>
         <a href={user.html_url} target='_blank' rel="noreferrer">{`@${user.login}`}</a>
         <p>{user.bio?? 'This profile has no bio'}</p>
       </div>
       <div>
         <p className={styles.userDate}>Joined {formattedDate}</p>
       </div>
      </section>
      <div className={styles.userNumbers}>
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
      <div className={styles.userStatics}>
       <ul>
         <li>{user.location}</li>
         <li>{user.twitter_username?? 'Not available'}</li>
       </ul>
       <ul>
        <li> <a href={user.blog}>{user.blog}</a></li>
        <li>{user.company}</li>
       </ul>
      </div>
    </main>
  )
}

export default UserInfo;