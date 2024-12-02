import React, {useContext} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {Array.isArray(state.data) && state.data.length > 0 ? (
          state.data.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </main>
  );
};

export default Home;