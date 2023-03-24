---
tags: docker
---
# Docker使用知識與方法 閱讀筆記(二)

[[toc]]

<img src="https://i.imgur.com/BhBysqw.jpg" style="width:300px" />


## 安裝Docker Desktop(Mac版)
- 安裝結果

<img src="https://i.imgur.com/HNS31yG.png" style="width:300px" />

- 啟動與停用Docker Engine

<img src="https://i.imgur.com/nMSnF1L.png" style="width:300px" />

## Doccker操作指令的結構
- 上級指令與副指令
```shell
docker [上級指令+副指令] 對象
## ex docker container（上級指令） run (副指令) penguin
```

- 選項與參數(Optional)
**選項和參數擺放順序會影響執行**
```shell
docker [上級指令+副指令] [-選項] [--參數] [映像檔] 
## ex docker container(上級指令) run(副指令) -d(選項) penguin --mode=1(參數)
```
- 可以同時帶入多個**選項 -dit** 
```shell
docker container run -dit penguin
```

- 常用指令
```shell
docker version ## 查看版本
docker ps [-a] ## 等同 docker container ls -a(所有容器)
```
## 取得映像檔
```shell
docker pull [image] ## 在docker hub中已發佈的映像檔
docker image ls ## 在主機已存在的映像檔
```
<img src="https://i.imgur.com/UTKCNwB.png" style="width:300px" />

## 容器-建立、啟動、停用、刪除
```shell
docker run -d --name webservice httpd:2.2 ## 依據Apache httpd映像檔[版本號2.2]，建立名為webservice的容器，在背景執行(-d);未指定版本號時，預設是最新版本
docker ps ## 查看運行中的容器
docker stop [container name]
docker ps -a ## 查看運行中和停用的容器
docker rm [container name]
```

## 容器-通訊

- 連線Apache服務
```shell
docker run -d -p 8080:80 --name webservice httpd 
## 外部訪問Docker Engine走8080port，對應到webservice的80 port(網路連接阜)
```

在本地走 http://localhost:8080 便可以訪問。

- 連線Ngnix服務
```shell
docker run --name nginxWebSerivec -d -p 8081:80 nginx
```

## 複製容器與主機的檔案

- 替換Apache的index.html 
```shell
## step1 啟動網路服務
docker run -d -p 8081:80 --name webService001 httpd
## step2 複製檔案
docker cp /file/path [container name]:/usr/local/apache2/htdocs ## 會看到新的html內容
## ex docker cp /Users/xxx/Desktop/index.html webService001:/usr/local/apache2/htdocs/ 
```
<img src="https://i.imgur.com/OMVpo65.png" style="width:300px" />

## 卷宗(volumn)掛載
- -v選項存在時，目的是要把指定在**卷宗名稱/主機檔案資料夾路徑**，取代**容器內檔案資料夾路徑**來替代，因此容器實際使用的資源就會是在本機。換言之，卷宗是不存在於容器之內，卷宗是在容器運行時掛載(mounted)來使用。
```shell
docker run -d -p 8084:80 --name webService002 -v [卷宗名稱/主機檔案資料夾路徑]:[容器內檔案資料夾路徑] httpd 
## ex docker run -d -p 8084:80 --name webService002 -v /Users/jasonlien/Desktop/:/usr/local/apache2/htdocs/ httpd 
```
- 掛載結果 

<img src="https://i.imgur.com/uOwHhwB.png" style="width:300px" />     
<br/>
<img src="https://i.imgur.com/l7jLNEL.png" style="width:300px" />     

