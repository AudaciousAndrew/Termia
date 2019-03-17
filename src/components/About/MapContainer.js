import React , {Component} from 'react'

export default class MapContainer2 extends Component {

  state = {
    coords:  {lat: 59.972211, lng: 30.302165} ,
    mapType: "hybrid" ,
    mapZoom: 15 ,
  }

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC67tbr70b-iNlTb66lmivo9bp3_Qx2Qsw&callback=initMap&language=en")
    window.initMap = this.initMap
  }

  initMap = () => {
    const infoWindow = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Termia office</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Address:</b>St.Petersburg Vyazemsky 5/7</p>'+
              '</div>'+
              '</div>';

    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.coords,
      zoom: this.state.mapZoom ,
      mapTypeId: this.state.mapType
    })
    var infowindow = new window.google.maps.InfoWindow({
            content: infoWindow
    })
    var marker = new window.google.maps.Marker({
         position: this.state.coords ,
         map: map,
         title: 'Termia office'
    })
    marker.addListener('click', function() {
          infowindow.open(map, marker);
    })
  }

  render(){
    return(
      <div id="map"></div>
    )
  }
}

function loadScript(url){
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script , index)
}
