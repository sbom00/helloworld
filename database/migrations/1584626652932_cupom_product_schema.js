'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CupomProductSchema extends Schema {
  up () {
    this.create('cupom_product', (table) => {
      table.increments()
      table.integer('cupom_id').unsigned()
      table.integer('product_id').usigned()
      table.timestamps()
      table.foreign('cupom_id').references('id').inTable('cupoms').onDelete('cascade')
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('cupom_products')
  }
}

module.exports = CupomProductSchema
