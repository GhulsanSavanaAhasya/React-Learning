import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const tambah = () => setCounter(counter+1);
    // const kurang = () => setCounter(counter-1);
    const kurang = () => {
        if (counter > 0){
            setCounter(counter-1);
        }
    }

  return (
    <div>
        <h1>Count: {counter}</h1>
        <button onClick={tambah} disabled={counter === 10}>Tambah</button>
        <button onClick={kurang} disabled={counter === 0}>Kurang</button>
    </div>
  )
}
export default Counter