import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
// import { selectError, selectIsLoading } from 'redux/selectors';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    margin: '0 auto',
    marginTop: '30px',
    maxWidth: '300px',
    backgroundColor: 'rgb(34, 134, 134)',
    boxShadow: '0 8px 11px -6px #222',
    borderRadius: '5px',
  },
};

export default function Contacts() {
  const isLoading = true;

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div style={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        {/* {isLoading && !error && (
          <b className="info_message">Request in progress...</b>
        )}
        {error && <b className="info_message">Error message --- {error}</b>} */}
        <h2>Contacts</h2>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
      </div>
    </>
  );
}
