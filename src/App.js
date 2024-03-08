import {useState} from 'react';

export default function App() {
  return <Tip />
}

function Tip(){
  return(
    <>
      <TipCalculator />
    </>
  )
}

function TipCalculator(){
  const [bill, setBill] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  // tip calculate
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  //reset
  const handleReset = () => {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }

  return(
    <form className="dflex aic jcc column">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>How did you like the service?</SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>How did your friend like the service?</SelectPercentage>
      {
        bill > 0 && 
        <>
          <Output bill={bill} onSetBill={setBill} tip={tip} /> 
          <Reset onReset={handleReset} />
        </>
      } 
    </form>
  )
}

function BillInput({bill, onSetBill}){
  
  return(
    <div>
      <label>How much was the bill?</label>
      <input type='number' placeholder='Bill Value' value={bill} onChange={e=>onSetBill(Number(e.target.value))} />
    </div>
  )
}

function SelectPercentage({children, percentage, onSelect}){
  return(
    <div>
        <label>{children}</label>
        <select value={percentage} onChange={e=>onSelect(Number(e.target.value))}>
          <option value='0'>Dissatisfied 0%</option>
          <option value='5'>It was okay 5%</option>
          <option value='10'>It was good 10%</option>
          <option value='20'>Absolutely amazing 20%</option>
        </select>
      </div>
  )
}

function Output({bill, tip}){
  return(
    <>
      <strong>You pay ${bill + tip} (${bill} + ${tip} tip)</strong>
    </>
  )
}

function Reset({onReset}){
  return(
    <button onClick={onReset}>Reset</button>
  )
}

