from bs4 import BeautifulSoup
from feedparser import parse

LINK = 'https://www.amazon.com/gp/rss/bestsellers/books/25/ref=zg_bs_25_rsslink'


class AmazonBook(object):

  def __init__(self, title, img_url):
    self.title = title
    self.img_url = img_url
    self.isbn_13 = ""
    self.author = ""


def load_best_sellers():
  feed = parse(LINK)

  books = []
  for entry in feed.entries:
    soup = BeautifulSoup(entry.summary_detail.value, 'html.parser')
    img_url = soup.div.img.get('src')
    title = entry.title
    books.append(AmazonBook(title, img_url))

  return books
