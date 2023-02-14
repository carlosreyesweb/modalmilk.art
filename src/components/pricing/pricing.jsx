import Commission from '../commission/commission'
import styles from './pricing.module.css'

export default function Pricing({ commissions }) {
  return (
    <section id="pricing" className={styles.container}>
      <h1 className={styles.title}>Precios</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui,
        deleniti debitis a aspernatur quis voluptas doloremque quaerat.
        Consectetur sit temporibus non deleniti ullam, eveniet id autem
        asperiores eaque ex.
      </p>
      <div className={styles.grid}>
        {commissions.map((commission) => (
          <Commission
            key={commission.uuid}
            title={commission.name}
            price={commission.price}
            images={commission.referenceImages}
          />
        ))}
      </div>
    </section>
  )
}
