ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631,30.323037],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938631,30.323037], {

        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/page/map-icon.svg',
            iconImageSize: [67, 100],
            iconImageOffset: [-30, -100]
        });

    myMap.geoObjects
        .add(myPlacemark);

});
