from bs4 import BeautifulSoup
import requests
import time
import json


def get_data():
  html_text = requests.get('https://myanimelist.net/profile/Samy_only').text

  soup = BeautifulSoup(html_text, 'lxml')
  anime_all = soup.find('div', class_='stats anime')
  anime_list = anime_all.find_all('span', class_='di-ib fl-r lh10')
  anime_list_2 = anime_all.find_all('span', class_='di-ib fl-r')

  manga_all = soup.find('div', class_='stats manga')
  manga_list = manga_all.find_all('span', class_='di-ib fl-r')


  wached_episodes = anime_list_2[2].text
  wached_anime = anime_list[1].text
  read_manga = manga_list[2].text
  print(f'Wached Episode : {wached_episodes}')
  print(f'Wached Anime : {wached_anime}')
  print(f'Read Manga : {read_manga}') 

  dictionary = {
    "episode": wached_episodes,
    "anime": wached_anime,
    "manga": read_manga
  }

  with open("sample.json", "w") as outfile:
    json.dump(dictionary, outfile)


if __name__ == '__main__':
  while True:
    get_data()
    time.sleep(3600)
    
