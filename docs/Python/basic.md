---
tags: Python 學習
head:
  - [meta, { name: description, content: Python 基礎學習 }]
---

# Python 基礎學習

[https://replit.com/@k1319900103/Start#basic.py](https://replit.com/@k1319900103/Start#basic.py)

```python
name = "jason"
age = 33
arr = [1, 2, 3]

# tpye
print(type(name))
print(type(age))
print('-------------')
# isinstance
print(isinstance(name, str))
print(isinstance(age, int))
print('-------------')
# operator

print(1 + 1)
print(20 / 3)
print(2**3)

sum = 5
sum += 20
print(sum)

print(20 >= 10 and 20 > 19)
print(20 >= 21 or 20 > 19)
print(1 in [1, 2, 3])


def is_adult(age):
  return True if age >= 18 else False


print(is_adult(18))
print('-------------')
name = "Jason\nHello"  #添加反斜線 配合特殊字元
print(name.islower())
print(name.lower())  # it return new str
print(name)
print(len(name))
print("name[5:]: " + name[5:])
print("name[1:4]: " + name[1:4])

print(round(2.3))
print('-------------')
from enum import Enum


# python用來建立常數的唯一方法
class State(Enum):
  INACT = 0
  ACT = 1


print(State(1))
print(State['ACT'].value)
print('-------------')
# list
# index 正向從0開始 -1則是最後一個開始
sizes = ["small", "medium", "large"]
sizes.append("extra large")
sizes += ["xxl", "xxxl"]
sizes.remove("xxxl")

print(sorted(sizes, key=str.lower))
print(sizes)
print(len(sizes))
print("small" in sizes)
print("small " in sizes)
print(sizes[-1])

print('-------------')

# Tuples
# 不可改動的陣列
names = ('D', 'A', 'B', 'C')
print(names.index('B'))
print(names[:2])
print(sorted(names))

print('-------------')
# Dictionaries

city = {"TPE": "Taipei", "TYN": "Taoyuan"}
print(city.get("TPE"))
print(city.get("TPE2"))
print(city)
print(list(city.items()))

print(city.popitem())
print(city)

print('-------------')
# sets
# item不能重複
set1 = {"Jason", "Roger", "Roger"}
set2 = {"Jason", "Paul"}
print(set1)
interSet = set1 & set2
print(interSet)

print('-------------')
```
