import './Account.css';

const Account = ({ title, amount, description }) => {

  return (
    <section className="account">
      <header>
        <h3>{title}</h3>
        <b>{amount}</b>
        <p>{description}</p>
      </header>

      <button>View transactions</button>
    </section>
  )
}

export default Account
