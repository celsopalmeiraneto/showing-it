import firebase from 'firebase';
import React, {useState} from 'react';
import styles from './index.module.css';

export function Login(props) {
  const [presentation, setPresentation] = useState('');
  const [host, setHost] = useState('');
  const [type, setType] = useState('local')
  const [message, setMessage] = useState('');

  return (
    <div className={styles.login}>
      <form method="POST" className={styles.box}>
        <div className={styles.formGroup}>
          <label>Tipo:</label>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="local">Local</option>
            <option value="firebase">Remota</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Apresentação:</label><input id="presentation" onChange={(e) => setPresentation(e.target.value)} type="value" value={presentation}/>
        </div>
        <div className={styles.formGroup}>
          <label>Apresentador:</label><input id="host" type="value" onChange={(e) => setHost(e.target.value)} value={host}/>
        </div>
        <div className={`${styles.formGroup} ${styles.buttonContainer}`}>
          <button disabled
            onClick={(e) => {
              e.preventDefault();
            }}
          >Apresentar
          </button>
          <button
            onClick={async (e) => {
              e.preventDefault();
              if (await presentationExists(presentation, type)) {
                setMessage('');
                return props.navigate(`presentation/local/${presentation}/0`);
              } else {
                setMessage('Apresentação / Apresentador não existem!');
              }
            }}
          >Assistir Apresentação
          </button>
        </div>
        <div className={styles.formGroup}>
          <span>{message}</span>
        </div>
      </form>
    </div>
  );
}

async function presentationExists(presentation, type) {
  if (type === 'local') return true;
  const presentationRef = firebase.database().ref(`presentations/${presentation}`);
  const snap = await presentationRef.once('value');
  return snap.exists();
}
