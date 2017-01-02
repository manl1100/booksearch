import json
import requests


class GoogleBook(object):

  def __init__(self, title, isbn_13, author, img_url):
    self.title = title
    self.isbn_13 = isbn_13
    self.author = author
    self.img_url = img_url

  @classmethod
  def from_response(cls, resp):
    books = []
    for b in resp['items']:
      title = b['volumeInfo']['title']
      for iden in b['volumeInfo']['industryIdentifiers']:
        if iden['type'] == "ISBN_13":
          isbn_13 = iden['identifier']
      author = b['volumeInfo']['authors'][0]
      img_url = b['volumeInfo']['imageLinks']['thumbnail']
      books.append(GoogleBook(title, isbn_13, author, img_url))
    return books


def load_books():
  r = requests.get(
      "https://www.googleapis.com/books/v1/volumes?q=harry+potter")
  books = GoogleBook.from_response(json.loads(r.text))

  with open('books.json', 'wb') as output:
    output.write(json.dumps(books, default=lambda o: o.__dict__))


if __name__ == '__main__':
  load_books()
