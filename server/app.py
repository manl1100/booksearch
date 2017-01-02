import tornado.ioloop
import tornado.web
import json
# from redis import Redis

# redis = Redis(host='redis', port=6379)


def load_from_file():
  with open('util/books.json', 'r') as f:
    return dict(data=json.loads(f.readline()))

BOOKS = load_from_file()


class BookHandler(tornado.web.RequestHandler):

  def get(self):
    self.set_header('Access-Control-Allow-Origin', 'http://localhost:3000')
    self.write(BOOKS)


def make_app():
  return tornado.web.Application([
      (r'/books', BookHandler),
  ])

if __name__ == '__main__':
  app = make_app()
  app.listen(8888)
  tornado.ioloop.IOLoop.current().start()
