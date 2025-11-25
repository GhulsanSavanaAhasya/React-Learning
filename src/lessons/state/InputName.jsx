import { useState } from "react"

function InputName() {
    const [nama, setNama] = useState("");

  return (
    <div>
        <h1>Nama: {nama}</h1>
        <label htmlFor="nama">Masukkan Nama Anda: </label>
        <input id="nama" type="text" value={nama} onChange={(e) => setNama(e.target.value)}/>
    </div>
  )
}
export default InputName