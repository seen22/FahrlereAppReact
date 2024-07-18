// src/Vorpruefung.js
import React from 'react';
import './Vorpruefung.css'; // Create a corresponding CSS file for styling

const Vorpruefung = () => {
  return (
    <div className="vorpruefung-container">
      <h2>Vorprüfung</h2>
      <label>Stop <select><option>Option 1</option></select></label>
      <label>Rechtsabbiegen <select><option>Option 1</option></select></label>
      <label>Rechtsabbiegen mehrspurig <select><option>Option 1</option></select></label>
      <label>Bahnübergang <select><option>Option 1</option></select></label>
      <label>Linksabbiegen <select><option>Option 1</option></select></label>
      <label>Linksabbiegen mehrspurig <select><option>Option 1</option></select></label>
      <label>Gang wählen <select><option>Option 1</option></select></label>
      <label>Fahrradschutzstreifen <select><option>Option 1</option></select></label>
      <label>Fahrrad überholen <select><option>Option 1</option></select></label>
      <label>Eingangsorfschaft <select><option>Option 1</option></select></label>
      <label>Geschwindigkeitsanpassung <select><option>Option 1</option></select></label>
    </div>
  );
};

export default Vorpruefung;
