---
tags: Python 學習
head:
  - [meta, { name: description, content: Python 基礎學習 }]
---

# Python 基礎學習

- 執行 .py

```shell
python basic.py
```

- 執行時添加必要參數

[https://replit.com/@k1319900103/Start#basic3.py](https://replit.com/@k1319900103/Start#basic3.py)

```python
import argparse

parser = argparse.ArgumentParser(description='this is desc..')

parser.add_argument('-c',
                    '--color',
                    metavar='color',
                    required=True,
                    choices={'red', 'yellow'},
                    help='set a color as parameter')

args = parser.parse_args()

print(args.color)

```

---
