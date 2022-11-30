---
tags: 學習
---

# D3js繪製台灣行政區地圖

[[toc]]

2022年，大致上的學習範例都是以vue3搭配vite的基礎下實作。D3js官網的範例，就因此需要適度的調整寫法，本篇參照D3js美國地圖zoom效果範例，來實作台灣行政區的地圖zoom效果。

## topo.json
在台灣政府資料公開平台，可以下載到行政區的SHP格式檔案，再透過[線上工具](https://mapshaper.org/)topo.json格式。


## d3 & topojson-client
在範例中，需要使用d3和topojson-client套件，需要先使用npm安裝
```shell!
npm i d3@6.7.0 topojson-client@3.1.0
```

:information_source: 透過topojson-client可以把topo格式的json檔案內容，演算成d3能渲染的路徑數據。

:warning: d3版本號差異會影響語法，一些網路上的範例是採用較舊版的版號，需要留意。

## 實作重點

### svg建立
這裡因為有包成元件，寬高是來自父層，所以有加prop。
```javascript
// svg#theSVG 是在template中存在 透過d3選取後加上寬高等屬性
d3.select('#theSVG')
  .attr('viewBox', [0, 0, props.width, props.height])
  .attr('width', props.width)
  .attr('height', props.height);
```
### 新增'g'層
```javascript
// 這個g層要專門拿來繪製地圖使用
const mapGraph = svg.append('g');
```

### 建立地理投影
這裡參照d3範例code去使用API，建立出來的path會在繪製圖形時使用。
```javascript
const mapGraph = svg.append('g');

const projection = d3
    .geoEquirectangular()
    .scale(11000)
    .center(isPhoneSize ? [121, 24] : [122, 24.5])
    .translate([props.width / 2, props.height / 2]);
const path = d3.geoPath().projection(projection);
```
### 畫出topo.json圖形
這裡實際繪製的演算過程是倚賴套件處理。
```javascript
//畫出行程區的深色區塊
mapGraph
    .append('g')
    .attr('fill', '#666')
    .attr('cursor', 'pointer')
    .selectAll('path')
    .data(topojson.feature(data, data.objects.COUNTY_MOI_1090820).features) //綁定圖形數據
    .join('path')
    .attr('id', (d) => {
        return 'path-' + d.properties.COUNTYCODE;
    })
    .on('click', clicked)
    .attr('d', path); //使用地底投影的路徑

//畫出行程區的白線
mapGraph
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', 'white')
    .attr('stroke-linejoin', 'round')
    .attr('d', path(topojson.mesh(data, data.objects.COUNTY_MOI_1090820, (a, b) => a !== b)));
```

### 綁定動作(click、zoom、reset...等)

```javascript
//如 如行政區深色區塊綁訂的click
d3.select('#theSVG > g > g').on('click', clicked)

// 最上層的svg
svg.on('click', reset);
svg.call(zoom);
```

## 效果
[demo](https://lian0103.github.io/d3-map/)

<img width="250" src="https://i.imgur.com/pWrmRZ2.gif" /> 

## 連結
- [source code](https://github.com/lian0103/d3-map)
- [台灣行政區圖資](https://data.gov.tw/dataset/7441)
- [D3js美國地圖zoom效果範例](https://observablehq.com/@d3/zoom-to-bounding-box)
- [topojson-client](https://github.com/topojson/topojson-client)