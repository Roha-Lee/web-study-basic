import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210919',headers=headers)
# data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver')
soup = BeautifulSoup(data.text, 'html.parser')
table_rows = soup.select('#old_content > table > tbody > tr')
for row in table_rows:
    title = row.select_one('td.title > div > a')
    rank = row.select_one('td > img')
    score = row.select_one('td.point')
    if title and rank and score:
        title = title.text
        rank = rank.attrs['alt']
        score = score.text
        print(rank, title, score)
        
        