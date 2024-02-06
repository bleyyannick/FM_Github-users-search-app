/* eslint-disable react/prop-types */
import styles from './UserInfo.module.css'; 

function UserInfo({user}) {
  const formattedDate = new Date(`${user.created_at}`).toLocaleString('en-us', {month: "short", year:"numeric", day:"numeric"});
  const UNAVALAIBLE_DATA = 'Not available'; 
  const UNAVAILABLE_BIO = 'This profile has no bio'; 
  return (
    <main className={styles.container}>
      <section className={styles.userDescription}>
       <img className={styles.logoImg} src={user.avatar_url}  alt="github user avatar"/>
       <div className={styles.textDescription}>
         <h1>{user.name}</h1>
         <a href={user.html_url} target='_blank' rel="noreferrer">{`@${user.login}`}</a>
         <p>{user.bio?? UNAVAILABLE_BIO }</p>
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
         <li>{user.location ?? UNAVALAIBLE_DATA}</li>
         <li>{user.twitter_username?? UNAVALAIBLE_DATA}</li>
       </ul>
       <ul>
        <li><a href={user.blog}>{user.blog?? UNAVALAIBLE_DATA}</a></li>
        <li>{user.company??  UNAVALAIBLE_DATA}</li>
       </ul>
      </div>
    </main>
  )
}

export default UserInfo;