#!/usr/bin/env python3
"""Module for listing all documents in a collection."""


def list_all(mongo_collection):
    """List all documents in a collection."""
    documents = list(mongo_collection.find())
    return documents
