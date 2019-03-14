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
            zoom: 6.5,
            controls: ['default']
        });
         HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
            "<b>{{ properties.hintContent }}</b>" +
            "</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );
        var myPlacemarkIstok = new ymaps.Placemark([56.259099, 43.884705], {
            balloonContentHeader: "ГК «Исток» Приемный пункт макулатуры",
            balloonContentBody: "Беспроводная система 'Умный дом'. </br> Управление обогревателями (конвектора)</br><img src='' width='150'>",
            balloonContentFooter: "<b>Время работ: 1 мес года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "ГК «Исток» Приемный пункт макулатуры"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkChasDom2Vet = new ymaps.Placemark([57.855595, 45.783492], {
            balloonContentHeader: "Частный дом г.Ветлуга",
            balloonContentBody: "Беспроводная система 'Умный дом'. </br> Управление  ИК обогревателями.</br> Управление котельным оборудованием</br><img src='' width='150'>",
            balloonContentFooter: "<b>Время работ: 4 мес года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "Частный дом  г.Ветлуга"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertest.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkChasDom = new ymaps.Placemark([55.824823, 43.986892], {
            balloonContentHeader: "Частный дом село Богоявление",
            balloonContentBody: "Управление светом,</br> розеточными группами. </br> Управление котельным оборудованием</br> Управление воротами. Система </br>контроля доступом и система </br>домофонной связи. Система</br>видеонаблюдения.</br> Охранно-пожарная сигнализация.</br><img src='' width='150'>",
            balloonContentFooter: "<b>Время работ: 5.5 мес года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "Частный дом  село Богоявление"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkChasMar2 = new ymaps.Placemark([56.300440, 43.978242], {
            balloonContentHeader: "Квартира на ул. Маршала Баграмяна, п.2",
            balloonContentBody: "Управление светом. Система</br> защиты от протечки воды.</br>  Система сбора данных</br>  от счетчиков электричества</br>  и воды. Управление кондиционерами.</br>  Автоматизация системы отопления.</br>  Управление электрическими </br> теплыми полами.</br><img src='' width='150'>",
            balloonContentFooter: "<b>Время работ: 6 мес года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "Частный клиент квартира  на ул. Маршала Баграмяна, п.2 "
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertest.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkChasMar2 = new ymaps.Placemark([56.30010, 43.978184], {
            balloonContentHeader: "Квартира на ул. Маршала Баграмяна, п.2",
            balloonContentBody: "Управление светом. Система</br> защиты от протечки воды.</br>  Система сбора данных</br>  от счетчиков электричества</br>  и воды. Управление кондиционерами.</br>  Автоматизация системы отопления.</br>  Управление электрическими </br> теплыми полами.</br><img src='' width='150'>",
            balloonContentFooter: "<b>Время работ: 1 мес года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "Частный клиент квартира  на ул. Маршала Баграмяна, п.2 "
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertest.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkChasMar = new ymaps.Placemark([56.300317, 43.978040], {
            balloonContentHeader: "Квартира на ул. Маршала Баграмяна, п.1",
            balloonContentBody: " Управление шторами. Система </br>защиты от протечки воды.</br> Система сбора данных </br>от счетчиков электричества</br>и воды. Управление кондиционерами.</br> Управление теплыми полами.</br><img src='' width='150'>",
            balloonContentFooter: "<b>Время работ: 1 мес года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "Частный клиент квартира  на ул. Маршала Баграмяна, п.1"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkChasStud = new ymaps.Placemark([56.314354, 44.002148], {
            balloonContentHeader: "Квартира  на ул. Студеная,32",
            balloonContentBody: "Управление светом, розеточными </br>группами, 'Умная дверь', автоматизация</br> систем водоснабжения, отопления, </br>вентиляции и кондиционирования.</br>Управление шторами. Система защиты от </br>протечки воды. Система сбора</br> данных от счетчиков электричества</br> и воды. Управление теплыми полами.</br><img src='' width='150'>",
            balloonContentFooter: "<b>Время работ: 3 мес года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "Частный клиент квартира  на ул. Студеная,32"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertest.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkPro = new ymaps.Placemark([56.246651, 43.962373], {
            balloonContentHeader: "ГК «Промавто»",
            balloonContentBody: "Управление светом, подьемными </br>механизмами, отоплением, контроль</br> доступом, система защиты от</br> протечки воды, видеонаблюдение</br><img src='https://smart-home-nn.ru/assets/templates/img/slide3.jpg' width='150'>",
            balloonContentFooter: "<b>Время работ: 1.5 мес года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "ГК «Промавто»"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemark = new ymaps.Placemark([56.225330311259455, 44.07214804796516], {
            balloonContentHeader: "ТЦ «МЕГА» <br> г.Нижний Новгород",
            balloonContentBody: "Установка систем <br>противопожарной безопасности, <br>видеонаблюдения, контроля доступом.<br><img src='https://smart-home-nn.ru/assets/templates/img/slide3.jpg' width='150'>",
            balloonContentFooter: "<b>Время работ: 2 года</b> </br> <a href='https://smart-home-nn.ru/our-projects/'>Подробнее о проекте</a> ",
            hintContent: "ТЦ «МЕГА» г.Нижний Новгород"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkred1 = new ymaps.Placemark([56.328085, 44.000291], {
            balloonContentHeader: "Государственная филармония <br> им.М.Ростроповича",
            balloonContentBody: "<p>Требовалось реализовать систему <br>светодиодного освещения холлов и фойе, <br>а также произвести монтаж трекового <br>светодиодного освещения площадки.</p><img src='https://smart-home-nn.ru/assets/templates/img/slide6.jpg' width='150'>",
            balloonContentFooter: "<b>Время работ: 3,5 месяц</b>",
            hintContent: "Государственная филармония им.М.Ростроповича"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertest.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue2 = new ymaps.Placemark([55.653350, 37.326303], {
            balloonContentHeader: "Государственный музей-галерея<br> Евгения Евтушенко",
            balloonContentBody: "<p>Требовалось реализовать систему <br>охранно-пожарной сигнализации, <br>видеонаблюдения,<br> контроль температурного режима</p><img src='https://smart-home-nn.ru/assets/templates/img/slide7.jpg' width='150'>",
            balloonContentFooter: "<b>Время работ: 2,5 месяца</b>",
            hintContent: "Государственный музей-галерея Евгения Евтушенко"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue3 = new ymaps.Placemark([55.766156, 37.601578], {
            balloonContentHeader: "Государственный центральный музей<br> современной истории России",
            balloonContentBody: "<p>Требовалось установить систему <br>охранно-пожарной сигнализации.</p><img src='https://smart-home-nn.ru/assets/templates/img/slide8.jpg' width='150'>",
            balloonContentFooter: "<b>Время работ: 4,5 месяца</b>",
            hintContent: "Государственный музей современной истории России"
        }, {
            hintLayout: HintLayout,
            iconLayout: 'default#image',
            iconImageHref:'img/placeholdertestb.svg',
            iconImageSize: [50, 50],
            iconImageOffset: [-24, -40]
        });
        var myPlacemarkblue4 = new ymaps.Placemark([56.174139, 43.520311], {
            balloonContentHeader: "Церковь Покрова <br>Пресвятой Богородицы",
            balloonContentBody: "<p>Требовалось произвести установку<br> системы охранной и архитектурной<br> подсветки здания.</p><img src='https://smart-home-nn.ru/assets/templates/img/slide9.jpg' width='150'>",
            balloonContentFooter: "<b>Время работ: 2 месяца</b>",
            hintContent: "Церковь Покрова Пресвятой Богородицы "
        }, {
            hintLayout: HintLayout,
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
        myMap.geoObjects.add(myPlacemarkPro);
        myMap.geoObjects.add(myPlacemarkChasStud);
        myMap.geoObjects.add(myPlacemarkChasMar);
        myMap.geoObjects.add(myPlacemarkChasMar2);
        myMap.geoObjects.add(myPlacemarkChasDom);
        myMap.geoObjects.add(myPlacemarkChasDom2Vet);
        myMap.geoObjects.add(myPlacemarkIstok);
    }