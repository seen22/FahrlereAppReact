import React, { useState, useEffect } from 'react';
import './App.css';

const coordinates = {
  stop: { lat: 52.5200, lng: 13.4050 },
  rechtsabbiegen: { lat: 48.8566, lng: 2.3522 },
  rechtsabbiegenMehrspurig: { lat: 40.7128, lng: -74.0060 },
  bahnübergang: { lat: 34.0522, lng: -118.2437 },
  linksabbiegen: { lat: 51.5074, lng: -0.1278 },
  linksabbiegenMehrspurig: { lat: 35.6895, lng: 139.6917 },
  gangWählen: { lat: 55.7558, lng: 37.6173 },
  fahrradschutzstreifen: { lat: 37.7749, lng: -122.4194 },
  fahrradÜberholen: { lat: 28.6139, lng: 77.2090 },
  eingangsorfschaft: { lat: -33.8688, lng: 151.2093 },
  geschwindigkeitsanpassung: { lat: 41.9028, lng: 12.4964 }
};
const App = () => {
  const [currentView, setCurrentView] = useState('');
  const [selectedCoordinates, setSelectedCoordinates] = useState({});

  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', () => {
  //       navigator.serviceWorker.register('/FahrlereAppReact/service-worker.js')
  //         .then(registration => {
  //           console.log('SW registered: ', registration);
  //         })
  //         .catch(registrationError => {
  //           console.log('SW registration failed: ', registrationError);
  //         });
  //     });
  //   }
  // }, []);

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleBack = () => {
    setCurrentView('');
  };

  const handleSelectChange = (event, key) => {
    setSelectedCoordinates(prevState => ({
      ...prevState,
      [key]: coordinates[key]
    }));
  };


  return (
    <div className="container">
      {currentView === '' && (
        <>
          <div className="label">Name der Schüler</div>
          <input className="input" type="text" placeholder="Name der Schüler" />

          <button className="button" onClick={() => handleViewChange('uebungsfahrt')}>
            Übungsfahrt <span className="arrow"></span>
          </button>
          <button className="button" onClick={() => handleViewChange('sonderfahrt')}>
            Sonderfahrt <span className="arrow"></span>
          </button>
          <button className="button" onClick={() => handleViewChange('vorpruefung')}>
            Vorprüfung <span className="arrow"></span>
          </button>
        </>
      )}

      {currentView === 'uebungsfahrt' && (
        <div className="uebungsfahrt-container">
          <div className="header">
          <button className="back-button" onClick={handleBack}>
  <svg className="back-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M15 6l-6 6 6 6" />
  </svg>
  Übungsfahrt
</button>

          </div>
          <label><input type="checkbox" /> rechts</label>
          <label><input type="checkbox" /> links</label>
          <label><input type="checkbox" /> mehrspurig</label>
          <label><input type="checkbox" /> Radweg</label>
          <label><input type="checkbox" /> Sonderstreifen</label>
          <label><input type="checkbox" /> Straßenbahnen</label>
          <label><input type="checkbox" /> Einbahnstraßen</label>
        </div>
      )}

      {currentView === 'sonderfahrt' && (
        <div className="sonderfahrt-container">
          <div className="header">
            <button className="back-button" onClick={handleBack}>
              <svg className="back-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15 6l-6 6 6 6" />
              </svg>
              Sonderfahrt
            </button>
          </div>
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
      )}

{currentView === 'vorpruefung' && (
        <div className="vorpruefung-container">
          <div className="header">
            <button className="back-button" onClick={handleBack}>
              <div className="back-circle">
                <svg className="back-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </div>
              <span className="back-text">Vorprüfung</span>
            </button>
          </div>
          <div className="dropdown-list">
            {Object.keys(coordinates).map(key => (
              <div className="dropdown-item" key={key}>
                <label>
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                  <select onChange={(e) => handleSelectChange(e, key)}>
                    <option value="">Select</option>
                    <option value="+">+</option>
                    <option value="++">++</option>
                    <option value="-">-</option>
                    <option value="rote X">rote X</option>
                  </select>
                </label>
                {selectedCoordinates[key] && (
                  <span className="info">
                    <i className="info-icon">i</i>
                    <span className="info-text">
                      Lat: {selectedCoordinates[key].lat}, Lng: {selectedCoordinates[key].lng}
                    </span>
                  </span>
                )}
              </div>
            ))}
            <div className="dropdown-item">
              <label>
                Geschwindigkeitsanpassung
                <select>
                  <option value="30">30</option>
                  <option value="70">70</option>
                  <option value="100">100</option>
                </select>
                <select>
                  <option value="+">+</option>
                  <option value="++">++</option>
                  <option value="-">-</option>
                  <option value="rote X">X</option>
                </select>
              </label>
              <span className="info">
              <i class="bi bi-info-circle"></i>
                <span className="info-text">
                  Lat: {coordinates.geschwindigkeitsanpassung.lat}, Lng: {coordinates.geschwindigkeitsanpassung.lng}
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
