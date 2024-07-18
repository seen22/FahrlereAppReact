// src/Sonderfahrt.js
import React from 'react';
import './Sonderfahrt.css'; // Create a corresponding CSS file for styling

const Sonderfahrt = () => {
  return (
    <div className="sonderfahrt-container">
      <h2>Sonderfahrt</h2>
      <label><input type="checkbox" /> Beobachtung/Spiegel</label>
      <label><input type="checkbox" /> Verkehrszeichen</label>
      <label><input type="checkbox" /> Kreuzungen/Einmündungen</label>
      <label><input type="checkbox" /> Kurven</label>
      <label><input type="checkbox" /> Steigungen</label>
      <label><input type="checkbox" /> Gefälle</label>
      <label><input type="checkbox" /> Alleen</label>
      <label><input type="checkbox" /> Überholen</label>
      <label><input type="checkbox" /> Ligenbleiben + Absichern</label>
      <label><input type="checkbox" /> Einfahren in Ortschaften</label>
      <label><input type="checkbox" /> Fußgänger</label>
      <label><input type="checkbox" /> Wild/Tiere</label>
      <label><input type="checkbox" /> Leistungssgrenze</label>
      <label><input type="checkbox" /> Orientierung</label>
      <label><input type="checkbox" /> Ablenkung (z.B. Radio)</label>
    </div>
  );
};

export default Sonderfahrt;
