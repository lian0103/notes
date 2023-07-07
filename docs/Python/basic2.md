---
tags: Python 學習
head:
  - [meta, { name: description, content: Python 基礎學習 }]
---

# Python 基礎學習

[https://replit.com/@k1319900103/Start#basic2.py](https://replit.com/@k1319900103/Start#basic2.py)

```python
# functions
# closure 閉包
def calcTotal():
  total = 0

  def add(num):
    nonlocal total
    total += num
    return total

  return add


calc = calcTotal()

calc(10)
calc(10)
calc(10)
print(calc(10))  #40

print('-------------')
# loops while
times = 0
while times < 5:
  print("times is " + str(times))
  times += 1

print('loops end')

print('-------------')

# loops for
items = [1, 2, 3, 4]
for item in items:
  print("item is " + str(item))

print('-------------')

for index, item in enumerate(items):
  print("item index is " + str(index) + " and item is " + str(item))

print('-------------')

for item in range(10):
  print("range item is " + str(item))

print('-------------')

for item in range(10):
  if item != 9:
    continue
  print("only item 9: " + str(item))

print('-------------')

# classes


class Animal:

  def walk(self):
    print('walking...')


class Dog(Animal):

  def __init__(self, name, age):
    self.name = name
    self.age = age

  def bark(self):
    print("woof! " + str(self.name))


andy = Dog("Andy", 33)
print(andy.age)
andy.bark()
andy.walk()

print('-------------')

# Modules
import module

module.test()

from math import sqrt

print(sqrt(81))

print('-------------')

```
