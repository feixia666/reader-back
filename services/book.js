const Book = require('../models/Book')
const { insert } = require('../db/index')

function exists(book) {}

function removeBook(book) {}

function insertContents(book) {}

function insertBook(book) {
  return new Promise(async (resolve, reject) => {
    try {
      if (book instanceof Book) {
        const result = await exists(book)
        if (result) {
          await removeBook(book)
          reject(new Error('电子书已存在'))
        } else {
          await insert(book.toDb(), 'book')
          await insertContents(book)
          resolve()
        }
      } else {
        reject(new Error('添加的图书对象不合法'))
      }
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  insertBook
}
