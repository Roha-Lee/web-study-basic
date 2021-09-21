#-*- coding:utf-8 -*-
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbroha

target_movie = db.movies.find({'title':'매트릭스'})
print(target_movie)
for movie in target_movie:
    print(movie['score'])
