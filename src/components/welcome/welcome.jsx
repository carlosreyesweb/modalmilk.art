import Image from 'next/image'
import modalmilk from '../../../public/modalmilk.png'
import SocialMedia from '../social-media/social-media'
import styles from './welcome.module.css'

export default function Welcome(props) {
  return (
    <section className={styles.container}>
      <div className={styles.welcome}>
        <h1 className={styles.text}>
          ¡Hola! Soy <strong>ModalMilk</strong>, ilustradora.
        </h1>
        <hr className={styles.divider} />
        <SocialMedia className={styles.socialMedia} />
      </div>
      <Image src={modalmilk} alt="ModalMilk" className={styles.photo} />
    </section>
  )
}
