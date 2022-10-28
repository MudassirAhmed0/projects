function myMap() {
    let center ;
    if(window.innerWidth < 1024){
        center =new google.maps.LatLng(28.111555, 35.109533)
    } else{
        center =new google.maps.LatLng(28.113021, 35.107412)
    }
    var mapProp = { 
        // center: new google.maps.LatLng(28.113021, 35.107412),
        center:center ,
        // center: { lat: 28.739279, lng: 35.25263 },
        // zoom: 17.5,
        zoom: window.innerWidth < 1024? 17.9 :17.5,
        disableDefaultUI: true,
        draggable: false, 
        zoomControl: false,
        styles: [
            //   bg color 
            { elementType: "geometry", stylers: [{ color: "#13100d" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#13100d" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: 'f0f' }],
            },
            {
                featureType: "poi",
                elementType: "labels",
                //   places names color
                stylers: [{ color: '#000' }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#100e0b" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                //   road color 
                // stylers: [{ color: "#2E2C2C" }],
                stylers: [{ color: "#1a1919" }],
                // stylers: [{ color: "#201E1C" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                //   road stroke color
                stylers: [{ color: "#13100d" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                //   text color
                stylers: [{ color: "#32302f" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
            // road arrows 
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    { "visibility": "off" }
                ]
            },

            // hide pointer
            {
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
            },
        ],
    };

    var icon = {
        url: "./assets/pulse.gif", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
};
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // const contentString =
    // '<div id="content">' +
    // '<div id="siteNotice">' +
    // "</div>" +
    // '<h1 id="firstHeading" class="firstHeading">Madinah Station</h1>' +
    // '<div id="bodyContent">' +
    // "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    // "sandstone rock formation in the southern part of the " +
    // "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    // "south west of the nearest large town, Alice Springs; 450&#160;km " +
    // "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    // "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    // "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    // "Aboriginal people of the area. It has many springs, waterholes, " +
    // "rock caves and ancient paintings. Uluru is listed as a World " +
    // "Heritage Site.</p>" +
    // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    // "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    // "(last visited June 22, 2009).</p>" +
    // "</div>" +
    // "</div>";
    const contentString =`
    <div id="content" class='min-w-[250px]'>
    <div id="siteNotice">
    </div>
    <h4 id="firstHeading" class="mt-4 firstHeading text-2xl text-center">Neom  Cybersecurity</h4>
    <div id="bodyContent">
    <div class="flex flex-col  items-center opacity-[70%] my-4">
    <div class="flex border   border-[#ccc]">
        <span class="border-[#ccc] border-r p-2 pr-4 mr-2">Sun-Thu</span>
        <span class="p-2">(7AM - 11PM)</span>
    </div>
    <div class="flex border-b border-r   border-l border-[#ccc]">
        <span class="border-[#ccc] border-r p-2 pr-4 mr-2">Sun-Thu</span>
        <span class="p-2">(7AM - 11PM)</span>
    </div>
</div>
<a href="https://www.google.com/maps/place/28%C2%B006'45.0%22N+35%C2%B006'34.4%22E/@28.1125116,35.1073741,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x135dbda222152280!8m2!3d28.1125116!4d35.1095628" target="_blank" class="mb-4 justify-center text-gold hover:opacity-[70%] transition-all duration-300 underline brown-light gap-x-2 flex items-center">
        Get Direction
        <img class="w-[18px]" src="./assets/images/svg/external-link.svg" alt="">
    </a>
    </div>
    </div>
    `

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });



    marker = new google.maps.Marker({
        position: new google.maps.LatLng(28.112972, 35.109409),
        map: map,
             icon: icon,
    });

    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    
}
