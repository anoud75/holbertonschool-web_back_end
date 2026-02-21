#!/usr/bin/env python3
"""Module for async generator."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Yield a random number between 0 and 10, ten times."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
