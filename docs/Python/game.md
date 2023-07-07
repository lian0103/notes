---
tags: Python 學習
head:
  - [meta, { name: description, content: Python 基礎學習 }]
---

# Python 猜拳遊戲

[https://replit.com/@k1319900103/Start#game.py](https://replit.com/@k1319900103/Start#game.py)

```python
import random

def get_choice():
  choices = ["rock", "paper", "scissors"]
  player_choice = input("Enter a choice ( rock , paper , scissors :)")
  computer_choice = random.choice(choices)
  choices = {"player": player_choice, "computer": computer_choice}
  return choices


def check_win(player, computer):
  choices = ["rock", "paper", "scissors"]
  print("You chose " + player + ", computer chose " + computer)

  try:
    choices.index(player)
  except:
    return "Your choice is not in list"

  if player == computer:
    return "No one win , it's tie"
  elif player == "rock" and computer == "paper":
    return "computer win"
  elif player == "paper" and computer == "scissors":
    return "computer win"
  elif player == "scissors" and computer == "rock":
    return "computer win"

  return "You win!"


choicesResult = get_choice()
gameResult = check_win(choicesResult.get("player"),
                       choicesResult.get("computer"))

print("---> " + gameResult)

```
