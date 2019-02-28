// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("mapyandexpoint", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [56.47758636, 40.75529169],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 6.5
        });
        var myPlacemark = new ymaps.Placemark([56.225330311259455, 44.07214804796516], {
            balloonContentHeader: "ТЦ «МЕГА» г.Нижний Новгород",
            balloonContentBody: "Описание<br><img src='https://smart-home-nn.ru/assets/templates/img/slide4.jpg'>",
            balloonContentFooter: "Подвал",
            hintContent: "ТЦ «МЕГА» г.Нижний Новгород"
        }, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholder.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkred1 = new ymaps.Placemark([56.328085, 44.000291], {}, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholderred.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue2 = new ymaps.Placemark([55.653350, 37.326303], {}, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholder.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue3 = new ymaps.Placemark([55.71252, 37.434154], {}, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholder.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue4 = new ymaps.Placemark([55.71252, 43.524501], {}, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholder.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemarkred1);
        myMap.geoObjects.add(myPlacemarkblue2);
        myMap.geoObjects.add(myPlacemarkblue3);
        myMap.geoObjects.add(myPlacemarkblue4);
    }