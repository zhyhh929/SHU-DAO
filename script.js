// 创建地图实例
var map = new AMap.Map('map', {
    zoom: 11,  // 初始缩放级别
    center: [104.0650, 30.6570]  // 成都市中心坐标
});

// 添加一些标记点
var markers = [
    {position: [104.0650, 30.6570], title: '点位A', content: '这是关于点位A的描述'},
    {position: [104.0800, 30.6700], title: '点位B', content: '这是关于点位B的描述'},
    {position: [104.0500, 30.6400], title: '点位C', content: '这是关于点位C的描述'}
];

markers.forEach(function(marker) {
    var newMarker = new AMap.Marker({
        map: map,
        position: marker.position,
        title: marker.title
    });

    var infoWindow = new AMap.InfoWindow({
        content: '<h3>' + marker.title + '</h3><p>' + marker.content + '</p>',
        offset: new AMap.Pixel(0, -30)
    });

    newMarker.on('click', function() {
        infoWindow.open(map, newMarker.getPosition());
    });
});

// 添加比例尺控件
map.addControl(new AMap.Scale());

// 添加缩放控件
map.addControl(new AMap.ToolBar());