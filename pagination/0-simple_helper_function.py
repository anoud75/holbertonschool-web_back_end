#!/usr/bin/env python3
"""Module for simple helper function for pagination."""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return a tuple of start and end index for pagination."""
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
