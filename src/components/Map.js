import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const wrapper = <div id="mymap" style={{ height: '350px', width: '100%' }}></div>;

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  componentDidMount() {

    let map = L.map('mymap').setView(this.props.location, 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoid2hvYW1pdGYiLCJhIjoiY2pyZ2owdG93MWVqajQ5cnNqeWUya2R3diJ9.MXKKe4zby3cqFpowZkhK0A'
}).addTo(map);
  L.marker(this.props.marker).addTo(map)
}

  render() {
    return (
      <div>{wrapper}</div>
    )
  }
}