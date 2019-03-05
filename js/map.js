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
            balloonContentHeader: "ТЦ «МЕГА» <br> г.Нижний Новгород",
            balloonContentBody: "Установка систем <br>противопожарной безопасности, <br>видеонаблюдения, контроля доступом.<br><img src='img/slide4mini.jpg'>",
            balloonContentFooter: "Время работ: 2 года",
            hintContent: "ТЦ «МЕГА» г.Нижний Новгород"
        }, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkred1 = new ymaps.Placemark([56.328085, 44.000291], {
            balloonContentHeader: "Государственная филармония <br> им.М.Ростроповича",
            balloonContentBody: "<p>Требовалось реализовать систему <br>светодиодного освещения холлов и фойе, <br>а также произвести монтаж трекового <br>светодиодного освещения площадки.</p><img src='img/slide6mini.jpg'>",
            balloonContentFooter: "Время работ: 3,5 месяц",
            hintContent: "Государственная филармония им.М.Ростроповича"
        }, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertest.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue2 = new ymaps.Placemark([55.653350, 37.326303], {
            balloonContentHeader: "Государственный музей-галерея<br> Евгения Евтушенко",
            balloonContentBody: "<p>Требовалось реализовать систему <br>охранно-пожарной сигнализации, <br>видеонаблюдения,<br> контроль температурного режима</p><img src='img/slide7mini.jpg'>",
            balloonContentFooter: "Время работ: 2,5 месяца",
            hintContent: "Государственный музей-галерея Евгения Евтушенко"
        }, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue3 = new ymaps.Placemark([55.766156, 37.601578], {
            balloonContentHeader: "Государственный центральный музей<br> современной истории России",
            balloonContentBody: "<p>Требовалось установить систему <br>охранно-пожарной сигнализации.</p><img src='img/slide8mini.jpg'>",
            balloonContentFooter: "Время работ: 4,5 месяца",
            hintContent: "Государственный музей современной истории России"
        }, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue4 = new ymaps.Placemark([56.174139, 43.520311], {
            balloonContentHeader: "Церковь Покрова <br>Пресвятой Богородицы",
            balloonContentBody: "<p>Требовалось произвести установку<br> системы охранной и архитектурной<br> подсветки здания.</p><img src='img/slide9mini.jpg'>",
            balloonContentFooter: "Время работ: 2 месяца",
            hintContent: "Церковь Покрова Пресвятой Богородицы "
        }, {
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemarkred1);
        myMap.geoObjects.add(myPlacemarkblue2);
        myMap.geoObjects.add(myPlacemarkblue3);
        myMap.geoObjects.add(myPlacemarkblue4);
    }