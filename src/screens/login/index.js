import React, {useState} from 'react';

export function Login(props) {
  const [presentation, setPresentation] = useState('');
  const [host, setHost] = useState('');
  return (
    <div>
      <form method="POST">
        <label for="presentation">Apresentação:</label><input id="presentation" onChange={(e) => setPresentation(e.target.value)} type="value" value={presentation}/>
        <label for="host">Apresentador:</label><input id="host" type="value" onChange={(e) => setHost(e.target.value)} value={host}/>
        <button>Começar Apresentação</button>
      </form>
    </div>
  );
}
