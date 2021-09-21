#-*- coding:utf-8 -*-
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbroha

def get_same_score_with_movie_title(title):
    target_movie = db.movies.find_one({'title':title})
    if target_movie:
        target_score = target_movie['score']
        result_movies = db.movies.find({'score':target_score})
        for movie in result_movies:
            print(movie['title'])
    return 

get_same_score_with_movie_title('매트릭스')