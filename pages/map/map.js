Page({
  data: {
    markers: [{
      iconPath: "http://www.jnyh120.com/swt/wx/images/logo.png",
      id: 0,
      latitude: 35.392903,
      longitude: 116.596709,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 116.596709,
        latitude: 35.392903
      }, {
        longitude: 116.596709,
        latitude: 35.392903
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: 'http://www.jnyh120.com/swt/wx/images/logo.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})