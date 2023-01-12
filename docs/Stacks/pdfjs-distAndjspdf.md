---
tags: 學習
---

# PDF簽名功能
[[toc]]

需求描述: 在web上開啟pdf後，可以做簽名後，儲存成PDF檔。

## canvas畫筆
使用html canvas元素，可以建立畫筆效果，在元素區域內綁定mousedown事件，可以取得觸發事件當前的offsetX、offsetY座標。
```javascript
const onMouseDown = (e) => {
    const el = e.target || e.srcElement;
    const ctx = el.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    el.onmousemove = function (e) {
        if (e.which === 0) {
            el.onmousemove = null;
            el.onmouseup = null;
            return;
        }
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    };
    el.onmouseup = function () {
        el.onmousemove = null;
        el.onmouseup = null;
    };
    el.focus();
};
```
HTML canvas
```htmlembedded
<canvas @mousedown="onMouseDown"></canvas>
```
## pdfjs-dist
要載入.pdf檔案到canvas元素內，概念上pdf內每一頁都需要對應一個canvas元素，而透過pdfjs-dist庫建立的page實例，可以使用render方法來將內容渲染到指定的canvas元素。
```javascript
currentPDF.getPage(page).then(
    function (page) {
        var viewport = page.getViewport({ scale: 1 });
        // Prepare canvas using PDF page dimensions
        var canvas = document.getElementById(`the-canvas-${pdfState.value.page}`);
        var context = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;
        pdfState.value.width = canvas.width;
        pdfState.value.height = canvas.height;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: context,
            viewport: viewport,
        };
        var renderTask = page.render(renderContext); //here
        renderTask.promise.then(function () {
            // console.log('Page rendered');
            isLoaded['' + pdfState.value.page] = true;
            pdfState.value.tempPage = pdfState.value.page;
        });
    },
    (err) => {
        pdfState.value.page = pdfState.value.tempPage;
        throw Error('the page is not exist');
    }
);
```
## jspdf
要實現canvas元素儲存為.pdf檔案，可以先透過canvas元素的toDataURL方法，轉成base64的圖檔資料，再使用jspdf庫創建一個jsPDF實例，使用addImage、addPage來將每一個canvas的圖檔轉換成.pdf內容。
```javascript
const doc = new jsPDF(direction, 'px', [width, height]);
arr.forEach((item, idx) => {
    doc.addImage(item, 'JPEG', 0, 0, width, height);
    if (idx + 1 !== arr.length) {
        doc.addPage();
    }
});
doc.save('all.pdf');
```

## 實作結果
[demo](https://lian0103.github.io/jsPDF/)
![](https://i.imgur.com/lQKI9aC.png)

## 參考
1. [jspdf sample](https://parall.ax/products/jspdf)
2. [pdfjs-dist viewer](https://mozilla.github.io/pdf.js/web/viewer.html)
3. [功能完整代碼](https://github.com/lian0103/jsPDF/blob/main/src/components/Pdf.vue)