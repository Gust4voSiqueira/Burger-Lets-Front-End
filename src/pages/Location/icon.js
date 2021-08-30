/* eslint-disable no-dupe-keys */
import L from 'leaflet';
import icon from '../../images/location-burguer.png';
import iconShadow from '../../images/location-burguer.png';

const iconPerson = new L.Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 50)
});


export { iconPerson };