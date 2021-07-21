import React from 'react';

import './global.css';
import './App.css';

function App() {
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required /> 
          </div>
          
          <div class="input-block">
            <label htmlFor="tech">Tecnologias</label>
            <input name="tech" id="tech" required />
          </div>

          <div class="input-block">
            <label htmlFor="username_github">Usuário do GitHub</label>
            <input name="github_username" id="username_github" required />
          </div>

        </form>     
      </aside>
      <main>

      </main>  
    
    </div>
  );
}

export default App;
