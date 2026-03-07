#!/usr/bin/env python3
"""Module for inserting a document in a collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document in a collection based on kwargs."""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
