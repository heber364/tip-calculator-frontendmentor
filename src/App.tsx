import { useEffect, useState } from 'react'
import dollarIcon from './assets/icon-dollar.svg'
import personIcon from './assets/icon-person.svg'
import logoIcon from './assets/logo.svg'
import styles from './styles/styles.module.scss'
function App() {

  const [bill, setBill] = useState(0)
  const [percentage, setPercentage] = useState(15);
  const [numberPeople, setNumberPeople] = useState(1)
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTip(bill*(percentage/100)/numberPeople)
    setTotal(bill*(percentage/100 + 1)/numberPeople)
  });

  function handleReset(){
    setBill(0);
    setPercentage(15)
    setNumberPeople(0)
    setTip(0)
    setTotal(0)
  }

  return (
    <main>
      <img src={logoIcon} alt="" />
      <div className={styles.calculator}>
        <div className={styles.containerOne}>
              <span>Bill</span>
              <div className={styles.inputBill}>
                <img src={dollarIcon} alt="" />
                <input type="number" placeholder='0' onChange={event=>{setBill(Number(event.target.value))}}/>
              </div> 
                      
              <span>Select Tip %</span>
              <div className={styles.buttonsContent}>
                <button 
                  className={percentage == 5 ? styles.active : ''}
                  onClick={()=>{setPercentage(5)}}>5%</button>
                <button 
                  className={percentage == 10 ? styles.active : ''}
                  onClick={()=>{setPercentage(10)}}>10%</button>
                <button 
                  className={percentage == 15 ? styles.active : ''}
                  onClick={()=>{setPercentage(15)}}>15%</button>
                <button 
                  className={percentage == 25 ? styles.active : ''}
                  onClick={()=>{setPercentage(25)}}>25%</button>
                <button 
                  className={percentage == 50 ? styles.active : ''}
                  onClick={()=>{setPercentage(50)}}>50%</button>
                <input type= 'number' placeholder='Custom' onChange={event=>{setPercentage(Number(event.target.value))}}/>
              </div>
            
            <span>Number of People</span>
            <div className={styles.inputNumberPeople}>
              <img src={personIcon} alt="" />
              <input type="number" placeholder='0' onChange={event=>{setNumberPeople(Number(event.target.value))}}/>
            </div>
           
          
        </div>
        <div className={styles.containerTwo}>
          <div className={styles.rowTipAmount}>
            <div>
              <h5>Tip Amount</h5>
              <span>/ person</span>
            </div>
            <strong>${tip}</strong>
          </div>
          <div className={styles.rowTotal}>
            <div>
              <h5>Total</h5>
              <span>/ person</span>
            </div>
            <strong>${total}</strong>
          </div>
          <button onClick={()=>(handleReset())}>Reset</button>
        </div>

      </div>
    </main>
  )
}

export default App
