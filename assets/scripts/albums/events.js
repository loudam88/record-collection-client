'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const api = require('../app')
const store = require('../store')

const onAddNewAlbum = function (response) {
  event.preventDefault()
  const data = event.target
  const formData = getFormFields(data)
  console.log(formData)
  api.addNewAlbum(formData)
    .then(ui.addNewAlbumSuccess)
    .catch(ui.addNewAlbumFailure)
}

const onGetLibrary = (event) => {
  event.preventDefault()
  api.getLibrary()
    .then(ui.getLibrarySuccess)
    .catch(ui.getLibraryfailure)
}

const onUpdateAlbum = function (event) {
  event.preventDefault()
  const data = event.target
  const formData = getFormFields(data)
  const albumId = $(event.target).closest('section').data('id')
  console.log(formData, albumId)
  api.updateAlbum(formData, albumId)
    .then(ui.updateAlbumSuccess)
    .catch(ui.updateAlbumFailure)
}

const onDeleteAlbum = function (event) {
  event.preventDefault()
  const albumId = $(event.target).closest('section').data('id')
  console.log('DELETE button clicked', albumId)
  api.deleteAlbum(albumId)
    .then(() => onGetLibrary(event))
    .catch(ui.deleteAlbumFailure)
}
module.exports = {
  onAddNewAlbum,
  onGetLibrary,
  onUpdateAlbum,
  onDeleteAlbum
}
