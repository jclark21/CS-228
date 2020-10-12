# -*- coding: utf-8 -*-
"""
Created on Mon Sep 28 10:53:45 2020

@author: jclar
"""

from sklearn.datasets import load_iris
import numpy as np
import pandas as pd

iris = load_iris(as_frame = True)
X = iris['data']
Y = iris['target']
d = X.insert(4,'Target',Y.values)