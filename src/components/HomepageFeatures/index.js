import React from 'react';
import Title from './Title';
import styles from './style.css';
import Card from './Card/Card.js';

function Features() {
    return (
        <>
        <div>
        <Title title="Benvenuto in SmartGreenOasis"></Title>
        <div className='paragraph'> 
        <p>
    SmartGreenOasis è una soluzione innovativa per gestire e monitorare la tua serra in modo intelligente. 
    Con il nostro sistema, puoi controllare l'illuminazione, la temperatura, l'umidità e altri parametri essenziali 
    per la crescita delle tue piante, direttamente dal tuo smartphone o computer.
        </p>
        </div>
        <section style={{ padding: '50px 20px'}}>
  <h3 style={{ textAlign: 'center' }}>Funzionalità di SmartGreenOasis</h3>
  <p style={{ textAlign: 'center' }}>Esplora le principali funzionalità del nostro sistema di gestione per serre smart.</p>
  
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
    {/* Card 1 */}
    <Card title="Controllo automatico" img="/Documentation/img/Controllo_Automatico.svg" description="Imposta valori predefiniti per gestire automaticamente la temperatura, l'umidità e altri parametri nella serra." />
    {/* Card 2 */}
    <Card title="Monitoraggio in tempo reale" img="/Documentation/img/Parametri.svg" description="Monitora la temperatura, umidità e altri parametri essenziali per la crescita delle tue piante, tutto in tempo reale." />
    {/* Card 3 */}
    <Card title="Log sulle piante" img="/Documentation/img/Log.svg" description="Registra il comportamento delle tue piante, monitorando parametri come crescita e umidità con una frequenza personalizzabile." />

  </div>
</section>

        </div>
        </>
    );
}

export default Features;