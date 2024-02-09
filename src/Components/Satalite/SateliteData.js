const SataliteData = [
    {
        Name:'Landsat',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/Landsat-550x255.png',
        Detail:'Landsat’s incredible long-lived legacy has archived Earth’s history for over 40 years. With countless applications, it even found the island Landsat in Canada.'
    },
    {
        Name:'Sentinel',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/Sentinel-550x301.png',
        Detail:'As part of the Copernicus Programme, Sentinel’s fleet of 6 missions is a game changer. Specifically, Sentinel-2 is a clear upgrade to Landsat, except that it’s missing the thermal band.'
    },
    {
        Name:'Terra',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/Terra-550x364.png',
        Detail:'As part of NASA’s multi-talented A-Train fleet, Terra is the jack-of-all-trades For example, ASTER models terrain, MODIS classifies land cover and MOPITT monitors air quality.'
    },
    {
        Name:'EnviSAT',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/envisat.png',
        Detail:'Before losing contact in 2012, EnviSAT did it all. For instance, it studied the oceans, terrain, and atmosphere. But now, it’s not operational. Because of its massive frame (8 tons), it is a candidate to be removed from orbit.'
    },
    {
        Name:'Worldview',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/Worldview3-309x425.png',
        Detail:'Maxar’s cutting-edge high-resolution satellite is ridiculously crisp (31 cm). Worldview imagery is so sharp that you can almost see license plates. In fact, it’s the only commercial satellite that can deliver at this resolution.'
    },
    {
        Name:'Landsat',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/Landsat-550x255.png',
        Detail:'Landsat’s incredible long-lived legacy has archived Earth’s history for over 40 years. With countless applications, it even found the island Landsat in Canada.'
    },
    {
        Name:'PlanetScope (Dove)',
        Pic:'https://gisgeography.com/wp-content/uploads/2017/09/dove-satellite-550x328.png',
        Detail:'Planetscope is a low-cost, lightweight, and low orbit from the company called Planet. This orchestra of microsatellites (nicknamed doves) orbits the Earth in concert scanning at 3-5 meter resolution images.'
    },
    {
        Name:'Global Navigation Satellite System (GNSS)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/GPS-550x374.png',
        Detail:'When you enable location on your smartphone, you’re tapping into GNSS. Every day, our GPS receivers leverage the 35-satellite system to pinpoint our exact position on Earth.'
    },
    {
        Name:'Shuttle Radar Topography Mission (SRTM)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/SRTM-550x498.png',
        Detail:'SRTM sculpted a 30-meter terrain model of Earth using two radar antennas and interferometry. Onboard the space shuttle Endeavour, it only needed 11 days to collect the necessary data.'
    },
    {
        Name:'Corona',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/corona-satellite.png',
        Detail:'The Corona satellite was a strategic, James Bond-style military satellite in the 1960s that spied on the Soviet Union. But now, archaeologists and other interest groups freely use these declassified images.'
    },
    {
        Name:'Earth Observing-1 Mission (EO-1)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/EO-1.jpg',
        Detail:'The goal of Earth Observing 1 (EO-1) was to propel science and innovation through experimental instrumentation. For example, Hyperion produces 220 spectral bands which enabled us to better characterize minerals.'
    },
    {
        Name:'Satellite Pour l’Observation de la Terre (SPOT)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/Spot-5.jpg',
        Detail:'In 1986, France’s SPOT-1 satellite was cutting edge. Since then, it has captured Earth’s vegetation, elevation, and even the Chernobyl disaster.'
    },
    {
        Name:'RADARSAT',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/RADARSAT.png',
        Detail:'Radarsat-2 is Canada’s space radar monitoring mission. As part of the Radarsat Constellation Mission, 3 C-band satellites will hone in on the Great White North’s land mass.'
    },
    {
        Name:'IKONOS',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/IKONOS.png',
        Detail:'IKONOS was a satellite marvel in its time. In fact, it was the first commercial satellite that was granted a license in America. But IKONOS-1 never made it to space. IKONOS-2 did and was renamed IKONOS.'
    },
    {
        Name:'Quickbird',
        Pic:'https://gisgeography.com/wp-content/uploads/2017/06/QuickBird-550x440.png',
        Detail:'QuickBird is versatile and cost-effective delivering optical imagery at 60cm. But in 2015, it was decommissioned and no longer serves the community.'
    },
    {
        Name:'RapidEye',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/rapideye-550x420.png',
        Detail:'RapidEye originated in Germany. Then, BlackBridge purchased it. Now, it’s owned by Planet. Despite several owners, this 5-satellite constellation provides 5-meter resolution anywhere at least daily.'
    },
    {
        Name:'Pleiades',
        Pic:'https://gisgeography.com/wp-content/uploads/2017/09/pleiades.png',
        Detail:'Pleiades consists of 2 nimble satellites operating in the same orbit. With incredible detail (2-meter), it can scan the Earth in any direction.'
    },
    {
        Name:'China-Brazil Earth Resource Satellite (CBERS)',
        Pic:'https://gisgeography.com/wp-content/uploads/2017/11/cbers-550x340.jpg',
        Detail:'China and Brazil unite in a joint quintuple mission to monitor everything from agriculture, environment, water pollution, and urban planning in their respective countries.'
    },
    {
        Name:'Project for On-Board Autonomy (PROBA)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/cubesat.png',
        Detail:'PROBA is a micro, cube-looking satellite with 30-meter hyperspectral data. Using its dextrous viewing angles, the PROBA satellite produced the world-renowned global vegetation archive.'
    },
    {
        Name:'ResourceSAT',
        Pic:'https://gisgeography.com/wp-content/uploads/2017/08/resourcesat-1.png',
        Detail:'Originally named IRS, ResourceSAT is an Indian polar-synchronous satellite. For ship surveillance, it’s equipped with an Automatic Identification System (AIS) payload.'
    },
    {
        Name:'KOMPSAT',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/kompsat-550x369.png',
        Detail:'Also known as Arirang, this optical satellite provides 1-meter resolution imagery. It’s rumored to monitor North Korean military activities. But it’s also available for commercial purposes.'
    },
    {
        Name:'CartoSAT',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/cartosat.png',
        Detail:'The Indian cartography series of commercial satellites collect land information with multispectral, panchromatic, and stereo mapping capabilities.'
    },
    {
        Name:'GeoEye',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/geoeye-1-550x410.png',
        Detail:'Maxar’s high-resolution (1.65-meter) imaging satellite is so sharp that ecologists have used it to track animal populations. Google also has rights to the imagery so there’s no coincidence that it’s also used in Google Maps.'
    },
    {
        Name:'Disaster Monitoring Constellation (DMC)',
        Pic:'https://gisgeography.com/wp-content/uploads/2017/11/dmc-550x366.png',
        Detail:'DMC masters disaster monitoring with its highly responsive, humanitarian constellation. It consists of AISAT-1, BilSAT, NigeriaSAT, UK-DMC, Beijing-1, Deimos-1 and NigeriaSAT.'
    },
    {
        Name:'SkySat',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/skysat.png',
        Detail:'SkySat is the type of gadget James Bond uses to spy on super-villains. In fact, it’s the first and only capable of capturing video footage at sub-meter resolution.'
    },
    {
        Name:'Tropical Rainfall Measuring Mission (TRMM)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/TRMM-satellite-550x324.png',
        Detail:'TRMM examines cloud structure and precipitation mostly at the equator. Because of TRMM, scientists can better predict global energy balances, water cycles, and El Niño.'
    },
    {
        Name:'Geostationary Operational Environmental Satellite (GOES)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/GOES-550x376.png',
        Detail:'GOES knows weather. Since 1975, this geostationary squad of satellites are unsung heroes in forecasting our planet’s weather.'
    },
    {
        Name:'National Oceanic and Atmospheric Administration Satellite (NOAA)',
        Pic:'https://gisgeography.com/wp-content/uploads/2017/09/NOAA-satellite-550x326.png',
        Detail:'NOAA satellites enable us to get a complete view of weather and environmental conditions around the world each day.'
    },
    {
        Name:'METEOSAT',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/meteosat-550x405.png',
        Detail:'Meteosat is the geostationary observer in Europe and Africa. By beaming images of Europe’s weather every 15 minutes, it’s ideal for weather forecasting.'
    },
    {
        Name:'Aqua',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/Aqua-550x367.png',
        Detail:'Aqua is NASA’s multi-purpose satellite. Not only does it tap into Earth’s water cycle by measuring relative humidity (AIRS/AMSU), but it also estimates cloud height (CERES) and energy flux (AMSR-E).'
    },
    {
        Name:'Cloud-Aerosol Lidar and Infrared Pathfinder Satellite Observations (CALIPSO)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/10/calipso.png',
        Detail:'Using laser technology and a special sensor for cirrus cloud, CALIPSO graphs the vertical profiles of cloud structure.'
    },
    {
        Name:'Television Infrared Observation Satellites (TIROS)',
        Pic:'https://gisgeography.com/wp-content/uploads/2016/09/tiros-550x305.png',
        Detail:'In the 1960s, TIROS was instrumental in sending early storm warnings. Specifically, this low-Earth orbiting satellite was built for televising infrared weather observations.'
    },
]
export default SataliteData;