
    let myMap;

    const init = () => {
        myMap = new ymaps.Map('map', {
            center: [59.938951, 30.315635],
            zoom: 11,
            controls: []
        });

        const coords = [
            [59.994203, 30.281303],
            [59.969296, 30.368897],
            [59.914220, 30.302155],
            [59.879659, 30.437396]
        ];

        const myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });

        coords.forEach(coord => {
            myCollection.add(new ymaps.Placemark(coord));
        });

        myMap.geoObjects.add(myCollection);
        myMap.behaviors.disable('scrollZoom');
    };

    ymaps.ready(init);

