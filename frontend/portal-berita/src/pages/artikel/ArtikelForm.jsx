import { useState } from "react";
import axios from "axios";

export default function FormArtikel() {
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");

  const submitArtikel = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post("http://localhost:5000/api/artikel", {
      judul, konten
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <form onSubmit={submitArtikel}>
      <input value={judul} onChange={(e) => setJudul(e.target.value)} />
      <textarea value={konten} onChange={(e) => setKonten(e.target.value)} />
      <button type="submit">Posting</button>
    </form>
  );
}
