#!/usr/bin/env python3
"""Module for creating tuple with type annotations."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with string and square of the number."""
    return (k, float(v ** 2))
