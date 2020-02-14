const UPLOAD_PATH = 'D:/nginx-1.17.8/upload/upload-ebook'
const UPLOAD_URL = 'http://localhost:8089/upload-ebook'

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2,
  PWD_SALT: 'admin_imooc_node',
  PRIVATE_KEY: 'haiming',
  JWT_EXPIRED: 60 * 30,
  UPLOAD_PATH,
  UPLOAD_URL,
  MIME_TYPE_EPUB: 'application/epub+zip'
}
