import React from 'react';

const Modulo7 = () => {
  return (
    
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      <div style={{ backgroundColor: '#5BA04C', padding: '20px', textAlign: 'center', color: 'white' }}>
        <h1>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      </div>

      <div style={{ marginTop: '20px', padding: '20px' }}>
        <h2>Bienvenido</h2>
        <div style={{ width: '100%', height: '4px', backgroundColor: '#5BA04C', margin: '8px 0' }}></div>
        <p>
          Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
        </p>
      </div>

      <div style={{ padding: '20px' }}>
        <h2>Temas Cubiertos</h2>
        <div style={{ width: '100%', height: '4px', backgroundColor: '#5BA04C', margin: '8px 0' }}></div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top', padding: '8px' }}>Componentes funcionales y de clase</td>
              <td style={{ verticalAlign: 'top', padding: '8px' }}>Uso de <strong>React hooks</strong> como useState y useEffect</td>
              <td style={{ verticalAlign: 'top', padding: '8px' }}>Creación de <strong>custom hooks</strong> como useForm</td>
              <td style={{ verticalAlign: 'top', padding: '8px' }}>Gestión de variables de estado con <strong>useState</strong></td>
              <td style={{ verticalAlign: 'top', padding: '8px' }}>Gestión de estado global con <strong>Redux</strong></td>
              <td style={{ verticalAlign: 'top', padding: '8px' }}>Integración de <strong>Redux</strong> con <strong>React</strong></td>
              <td style={{ verticalAlign: 'top', padding: '8px' }}>Manejo de <strong>Formularios</strong> en <strong>React</strong></td>
              <td style={{ verticalAlign: 'top', padding: '8px' }}>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ padding: '20px' }}>
        <h2>Recursos Adicionales</h2>
        <div style={{ width: '100%', height: '4px', backgroundColor: '#5BA04C', margin: '8px 0' }}></div>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes recursos:
        </p>
      </div>

      <div style={{ textAlign: 'center', padding: '20px', color: '#777' }}>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#5BA04C', margin: '8px 0' }}></div>
        © 2024 Modulo 7. USIP.
      </div>
    </div>
  );
};

export default Modulo7;