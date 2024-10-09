import json
import os
from pathlib import Path
from pymongo import MongoClient
from pymongo.synchronous.collection import Collection
from pymongo.synchronous.database import Database
from bson import ObjectId


def connect_to_mongodb() -> MongoClient:
    database_url = os.getenv('DATABASE_URL')
    print(f"Connecting to MongoDB at {database_url}")
    return MongoClient(database_url)

def list_files_in_directory(directory_path) -> list:
    try:
        filenames = os.listdir(directory_path)
        return filenames
    except FileNotFoundError:
        print(f"The directory {directory_path} does not exist.")
        return []

def clean_data(data):
    if isinstance(data, dict):
        cleaned_data = {k: clean_data(v) for k, v in data.items() if not k.startswith('$')}
        if '_id' not in cleaned_data or not isinstance(cleaned_data['_id'], ObjectId):
            cleaned_data['_id'] = ObjectId()
        return cleaned_data
    elif isinstance(data, list):
        return [clean_data(item) for item in data]
    else:
        return data

def insert_json_to_mongo(json_file_path, db_name, collection_name) -> None:
    client = connect_to_mongodb()
    db: Database = client[db_name]
    collection: Collection = db[collection_name]

    # Empty the collection before inserting new data
    collection.delete_many({})

    # Insert the data from the JSON file into the collection
    with open(json_file_path, 'r') as file:
        data: dict = json.load(file)
        cleaned_data = clean_data(data)
        if isinstance(cleaned_data, list):
            collection.insert_many(cleaned_data)
        else:
            collection.insert_one(cleaned_data)

    print(f"Inserted data from {json_file_path} into MongoDB db {db_name} coll {collection_name}.")

def main():
    filenames = list_files_in_directory('./data')
    for filename in filenames:
        [ db_name, collection_name ] = Path(filename).stem.split('.')
        insert_json_to_mongo(f'./data/{filename}', db_name, collection_name)

if __name__ == '__main__':
    main()