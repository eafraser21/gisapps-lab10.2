document.addEventListener('DOMContentLoaded', function () {
   var map = L.map('map').setView([40.38, -105.5], 10);

L.tileLayer("https://api.mapbox.com/styles/v1/eafraser/cje7wsss8036l2qn3cotvf5fp/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWFmcmFzZXIiLCJhIjoiY2l3ZmQ5cHE0MGVlaDJ6bzV1ODlzMmNocyJ9.pwXheTs7xgObVaLSfp0Jew",
{
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

function showLatLng(e) {
  document.getElementById("whereIsThis").innerText = (e.latlng.lat).toFixed(5) + " | " + (e.latlng.lng).toFixed(5);
}
map.on('mousemove', showLatLng);

document.getElementById("goToFRCCBoulder").onclick = function(){
  map.setView([40.1386, -105.12793], 16);
};

document.getElementById("goToRMNP").onclick = function(){
  map.setView([40.4, -105.8], 12);
};

function onMapClick(e) {
    var popup = L.popup()
    .setLatLng(e.latlng)
    .setContent("<center><img src='http://dev.brightrain.com/recreationer/images/icon-map-marker.png'></center><h4>" + e.latlng.lat + " | " + e.latlng.lng + "</h4>")
    .openOn(map);
}
map.on('click', onMapClick);

var lakesGeojson = 
    {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "name": "Spinney Mountain Reservior"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -105.6496810913086,
            39.003977902109774
          ],
          [
            -105.64350128173827,
            39.00224370106619
          ],
          [
            -105.63817977905273,
            38.998775171449616
          ],
          [
            -105.6364631652832,
            38.99904198745693
          ],
          [
            -105.63526153564453,
            38.99810812702949
          ],
          [
            -105.63577651977539,
            38.99730766542481
          ],
          [
            -105.63508987426758,
            38.995306471797484
          ],
          [
            -105.6338882446289,
            38.99290496474167
          ],
          [
            -105.63234329223631,
            38.9907702233895
          ],
          [
            -105.63079833984375,
            38.988368562404126
          ],
          [
            -105.63011169433594,
            38.98650054752111
          ],
          [
            -105.62976837158203,
            38.98516622099498
          ],
          [
            -105.62891006469727,
            38.98356499596481
          ],
          [
            -105.62753677368164,
            38.98169685432267
          ],
          [
            -105.62582015991211,
            38.98022899416542
          ],
          [
            -105.62255859375,
            38.97862765746913
          ],
          [
            -105.61946868896484,
            38.97662593567121
          ],
          [
            -105.62942504882812,
            38.966883415149596
          ],
          [
            -105.63114166259766,
            38.96621607018527
          ],
          [
            -105.633544921875,
            38.966749946659675
          ],
          [
            -105.63543319702148,
            38.96795115401593
          ],
          [
            -105.63783645629883,
            38.96648300892541
          ],
          [
            -105.63972473144531,
            38.96554871893418
          ],
          [
            -105.64178466796875,
            38.96514830516587
          ],
          [
            -105.6393814086914,
            38.966749946659675
          ],
          [
            -105.63783645629883,
            38.96848501741372
          ],
          [
            -105.63732147216797,
            38.96995312101093
          ],
          [
            -105.63886642456055,
            38.971955031423384
          ],
          [
            -105.64178466796875,
            38.972755779745064
          ],
          [
            -105.64229965209961,
            38.97422379482112
          ],
          [
            -105.64521789550781,
            38.973423063097364
          ],
          [
            -105.64985275268555,
            38.97235540671589
          ],
          [
            -105.65362930297852,
            38.9731561505109
          ],
          [
            -105.6551742553711,
            38.97422379482112
          ],
          [
            -105.65431594848633,
            38.97529142303624
          ],
          [
            -105.65174102783202,
            38.97502451749137
          ],
          [
            -105.64985275268555,
            38.976492485539396
          ],
          [
            -105.64882278442383,
            38.97689283518032
          ],
          [
            -105.65053939819336,
            38.97916144039182
          ],
          [
            -105.6525993347168,
            38.9807627650163
          ],
          [
            -105.65534591674803,
            38.98303124623994
          ],
          [
            -105.6580924987793,
            38.9858333874019
          ],
          [
            -105.66375732421875,
            38.98903569862982
          ],
          [
            -105.66478729248047,
            38.99210444428017
          ],
          [
            -105.66375732421875,
            38.993705476148435
          ],
          [
            -105.66289901733397,
            38.995306471797484
          ],
          [
            -105.66307067871094,
            38.997040842877716
          ],
          [
            -105.65946578979492,
            38.996373782108165
          ],
          [
            -105.65637588500977,
            38.993972311271854
          ],
          [
            -105.65431594848633,
            38.992504705642766
          ],
          [
            -105.65380096435547,
            38.993838893835914
          ],
          [
            -105.6500244140625,
            38.991971023322954
          ],
          [
            -105.65242767333983,
            38.99517305687678
          ],
          [
            -105.65156936645508,
            38.99757448696584
          ],
          [
            -105.6503677368164,
            39.000642862372096
          ],
          [
            -105.6503677368164,
            39.00464489119184
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -105.65045356750487,
            39.00424469849724
          ],
          [
            -105.6496810913086,
            39.003977902109774
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "name ": "Antero Reservoir"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -105.9353256225586,
              39.0051784779297
            ],
            [
              -105.93669891357422,
              39.00264390508013
            ],
            [
              -105.93669891357422,
              38.99984242944213
            ],
            [
              -105.9353256225586,
              38.997974717390875
            ],
            [
              -105.93395233154297,
              38.99570671505043
            ],
            [
              -105.93515396118164,
              38.99450597850039
            ],
            [
              -105.93515396118164,
              38.993705476148435
            ],
            [
              -105.93378067016602,
              38.992771545293564
            ],
            [
              -105.9353256225586,
              38.99036995221769
            ],
            [
              -105.93481063842773,
              38.989569403083166
            ],
            [
              -105.93721389770508,
              38.988368562404126
            ],
            [
              -105.9353256225586,
              38.98650054752111
            ],
            [
              -105.93481063842773,
              38.98489935267168
            ],
            [
              -105.93206405639648,
              38.982230614107614
            ],
            [
              -105.93086242675781,
              38.98142997292121
            ],
            [
              -105.93189239501952,
              38.979695219290605
            ],
            [
              -105.93240737915039,
              38.97849421110972
            ],
            [
              -105.93412399291992,
              38.976492485539396
            ],
            [
              -105.9353256225586,
              38.975424875431436
            ],
            [
              -105.93584060668944,
              38.974357249228206
            ],
            [
              -105.93446731567383,
              38.973289606929875
            ],
            [
              -105.93240737915039,
              38.97248886464377
            ],
            [
              -105.93154907226562,
              38.973423063097364
            ],
            [
              -105.93292236328124,
              38.97395688525248
            ],
            [
              -105.93240737915039,
              38.97502451749137
            ],
            [
              -105.93257904052733,
              38.97662593567121
            ],
            [
              -105.93120574951172,
              38.976492485539396
            ],
            [
              -105.93103408813477,
              38.97796042315712
            ],
            [
              -105.9305191040039,
              38.97889454943346
            ],
            [
              -105.9279441833496,
              38.98009555082397
            ],
            [
              -105.92657089233398,
              38.97902799503838
            ],
            [
              -105.92519760131836,
              38.97849421110972
            ],
            [
              -105.92227935791016,
              38.9807627650163
            ],
            [
              -105.92227935791016,
              38.98009555082397
            ],
            [
              -105.92193603515625,
              38.97796042315712
            ],
            [
              -105.92039108276366,
              38.97729318255781
            ],
            [
              -105.9188461303711,
              38.97662593567121
            ],
            [
              -105.91747283935545,
              38.97769352767186
            ],
            [
              -105.91352462768553,
              38.975558327575136
            ],
            [
              -105.9133529663086,
              38.97395688525248
            ],
            [
              -105.91232299804688,
              38.974357249228206
            ],
            [
              -105.9111213684082,
              38.973289606929875
            ],
            [
              -105.90957641601561,
              38.973689974677875
            ],
            [
              -105.908203125,
              38.97128773423957
            ],
            [
              -105.91060638427734,
              38.9695527321385
            ],
            [
              -105.908203125,
              38.970353507620054
            ],
            [
              -105.90442657470703,
              38.97102081360566
            ],
            [
              -105.90116500854492,
              38.97168811330431
            ],
            [
              -105.89910507202148,
              38.973689974677875
            ],
            [
              -105.89670181274414,
              38.97595868249733
            ],
            [
              -105.89515686035156,
              38.97889454943346
            ],
            [
              -105.89481353759766,
              38.98089620710029
            ],
            [
              -105.89653015136719,
              38.98196373471812
            ],
            [
              -105.89738845825194,
              38.982897808179985
            ],
            [
              -105.89601516723633,
              38.98316468404842
            ],
            [
              -105.89498519897461,
              38.98409874166562
            ],
            [
              -105.89498519897461,
              38.98610025220411
            ],
            [
              -105.89532852172852,
              38.989302551359515
            ],
            [
              -105.89532852172852,
              38.992504705642766
            ],
            [
              -105.89653015136719,
              38.99503964170453
            ],
            [
              -105.89790344238281,
              38.99650719476513
            ],
            [
              -105.89893341064453,
              38.997707897359035
            ],
            [
              -105.90065002441405,
              38.99997583555929
            ],
            [
              -105.90167999267577,
              39.001309882896535
            ],
            [
              -105.90288162231445,
              39.003044106830195
            ],
            [
              -105.90459823608397,
              39.0047782882536
            ],
            [
              -105.9078598022461,
              39.00624563933131
            ],
            [
              -105.90974807739258,
              39.0047782882536
            ],
            [
              -105.90871810913086,
              39.00264390508013
            ],
            [
              -105.90545654296875,
              39.000909671336494
            ],
            [
              -105.90202331542969,
              38.99984242944213
            ],
            [
              -105.90082168579102,
              38.99810812702949
            ],
            [
              -105.90322494506836,
              38.99757448696584
            ],
            [
              -105.90597152709961,
              38.997441076321095
            ],
            [
              -105.9092330932617,
              38.99650719476513
            ],
            [
              -105.9107780456543,
              38.99570671505043
            ],
            [
              -105.91472625732422,
              38.99677401932448
            ],
            [
              -105.91747283935545,
              38.99864176306864
            ],
            [
              -105.9195327758789,
              38.997974717390875
            ],
            [
              -105.92296600341797,
              38.998374945552115
            ],
            [
              -105.92485427856445,
              39.00291070649836
            ],
            [
              -105.9298324584961,
              39.00464489119184
            ],
            [
              -105.9353256225586,
              39.0051784779297
            ]
          ]
        ]
      }
    }
  ]
}

L.geoJSON(lakesGeojson).addTo(map);
});

