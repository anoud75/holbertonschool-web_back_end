#!/usr/bin/env python3
"""Module for summing a mixed list with type annotations."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return sum of a list of integers and floats."""
    return sum(mxd_lst)
