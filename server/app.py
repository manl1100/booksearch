import tornado.ioloop
import tornado.web
import json
# from redis import Redis

# redis = Redis(host='redis', port=6379)

BOOKS = {
    "data": [
        {"name": "Hitchikers Guide to the Galaxy", "url":
         "https://images-na.ssl-images-amazon.com/images/I/514lGrZn9TL._SX330_BO1,204,203,200_.jpg"},
        {"name": "The Restaurand at the end of the Universe", "url":
         "http://vignette1.wikia.nocookie.net/hitchhikers/images/7/7a/The_Restaurant_at_the_End_of_the_Universe.jpg/revision/latest?cb=20140520175045"},
    ]
}


class MainHandler(tornado.web.RequestHandler):

  def get(self):
    self.write("Hello, world")


class BookHandler(tornado.web.RequestHandler):

  def get(self):
    self.set_header("Access-Control-Allow-Origin", "http://localhost:3000")
    self.write(BOOKS)


def make_app():
  return tornado.web.Application([
      (r"/", MainHandler),
      (r"/books", BookHandler),
  ])

if __name__ == "__main__":
  app = make_app()
  app.listen(8888)
  tornado.ioloop.IOLoop.current().start()
