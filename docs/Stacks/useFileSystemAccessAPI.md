---
tags: stack
---

# 匯出 excel&指定儲存路徑

## xlsx 套件 & browser File System Access API (showSaveFilePicker)

xlsx 套件生成 excel 的介紹部分省略(之前寫過)。在原本找的範例中，下載是透過產生\<a\> link 去做下載動作，這流程會把檔案下載到瀏覽器預設的儲存路徑。

```javascript
const link = document.createElement("a");
link.href = uri + base64(workbookXML);
link.download = "Workbook.xls";
link.target = "_blank";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
```

而使用 browser File System Access API，可以指定檔案儲存路徑，也可以讓使用者自己再修改檔案名稱。

```javascript
//...
const handle = await window.showSaveFilePicker({
    suggestedName: filename,
    types: [
      {
        description: "Excel 檔案",
        accept: {...},
      },
    ],
});

// 檔案資料寫入指定位置
const writableStream = await handle.createWritable();
await writableStream.write(blob);
await writableStream.close();
```

## vue3 版本：excel 匯出 sample code

```javascript
<script setup>
import * as XLSX from "xlsx";

const exportToExcel = async () => {
  const filename = "用戶數據";

  // 創建工作簿
  const workbook = XLSX.utils.book_new();

  // 創建工作表
  const worksheet = XLSX.utils.aoa_to_sheet([
    ["姓名", "年齡"],
    ["John Doe", 30],
    ["Jane Smith", 25],
    ["Bob Johnson", 35],
  ]);

  // 將工作表添加到工作簿
  XLSX.utils.book_append_sheet(workbook, worksheet, filename);

  // 將工作簿轉換為Excel文件對象
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // 創建Blob對象
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const handle = await window.showSaveFilePicker({
    suggestedName: filename,
    types: [
      {
        description: "Excel 檔案",
        accept: {
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
            ".xlsx",
          ],
        },
      },
    ],
  });

  console.log(handle);
  console.log(blob);

  // 檔案資料寫入指定位置
  const writableStream = await handle.createWritable();
  await writableStream.write(blob);
  await writableStream.close();
};
</script>

<template>
  <div>
    <button @click="exportToExcel">匯出 Excel</button>
  </div>
</template>

<style lang="scss">
button {
  @apply p-4 font-bold text-3xl tracking-wide shadow-md;
}
</style>
```
