#-*- coding:utf-8 -*-
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbroha
result = db.movies.update_one({'title':'매트릭스'},{'$set':{'score': 0}})
print(result.matched_count, result.modified_count)