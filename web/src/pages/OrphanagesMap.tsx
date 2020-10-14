import React from 'react';
//Router
import { Link } from 'react-router-dom';
//styles
import '../styles/pages/orphanages-map.css';
//images
import mapMakerImg from '../images/mapMarkerImg.svg';
//icons
import { FiPlus, FiArrowRight } from 'react-icons/fi'
//maps
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


import MapIcon from '../utils/mapIcon';



function orphanagesMap(){
  return (
    <div id="page-map">
      <aside>
        <header>
            <img src={mapMakerImg} alt="happy" />

            <h2>Escolha um orfanato</h2>
            <p>Muitas crianças estão esperando a sua visita.</p>
        </header>

        <footer>
          <strong>Belém</strong>
          <span>Pará</span>
        </footer>
      </aside>

     <Map
      center={[-1.3350073,-48.468732]}
      zoom={15}
      style={{ width:'100%', height:'100%'}}
     >
       <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
       <Marker
        icon={MapIcon}
        position={[-1.3350073,-48.468732]}
       >
         <Popup 
          closeButton={false} 
          minwidth={240} 
          maxwidth={240} 
          className="map-popup">
          Lar das crianças
          <Link to="/orphanages/1">
            <FiArrowRight size={20} color="#FFF" />
          </Link>
         </Popup>
       </Marker>
     </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default orphanagesMap;