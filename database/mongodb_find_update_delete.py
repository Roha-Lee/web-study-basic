from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbroha

all_users = list(db.users.find({}))
same_ages = list(db.users.find({'age':21}))

# print(all_users[0])
# print(all_users[0]['name'])
# print(same_ages)
# for user in all_users:
#     print(user)

user = db.users.find_one({'name':'bobby'})
print(user)
# db.people.update_many(찾을조건,{ '$set': 어떻게바꿀지 })
db.users.update_one({'name':'bobby'}, {'$set':{'age': 19}})
user = db.users.find_one({'name':'bobby'})
print(user)

db.users.delete_one({'name':'bobby'})
user = db.users.find_one({'name':'bobby'})
print(user)