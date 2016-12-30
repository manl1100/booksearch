import sys
from sqlalchemy import Column, ForeignKey
from sqlalchemy import Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()


class Book(Base):

  __tablename__ = 'book'

  book_name = Column(String(80), nullable=False)
  author = Column(String(80), nullable=False)
  id = Column(Integer, primary_key=True)

engine = create_engine('sqlite://book.db')
Base.metadata.create_all(engine)
