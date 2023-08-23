const { books } = require('./data');
const { getZendeskUser } = require('./service/zendesk.service');

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
    zendeskUserToken: () => getZendeskUser(),
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { id: String(books.length + 1), title, author };
      books.push(newBook);
      return newBook;
    },
    updateBook: (_, { id, title, author }) => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], title, author };
        return books[bookIndex];
      }
      throw new Error('Book not found');
    },
    deleteBook: (_, { id }) => {
      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        return true;
      }
      return false;
    },
  },
};

module.exports = resolvers;
