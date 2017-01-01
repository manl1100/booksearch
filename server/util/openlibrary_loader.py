#!/usr/bin/python
import json


class Book(object):

  def __init__(self, title, isbn_13):
    self.title = title
    self.isbn_13 = isbn_13


def load_books(file):
  books = []
  with open(file) as f:
    for line in f:
      columns = line.split('\t')
      data = json.loads(columns[4])
      books.append(Book(data.get('title'), data.get('isbn_13')))
  return books

if __name__ == "__main__":
  load_books('/Users/manuelsanchez/Downloads/test2.txt')
