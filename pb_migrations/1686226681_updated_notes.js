migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8r6d26my6bls8y1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "loggzxrs",
    "name": "conent",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8r6d26my6bls8y1")

  // remove
  collection.schema.removeField("loggzxrs")

  return dao.saveCollection(collection)
})
