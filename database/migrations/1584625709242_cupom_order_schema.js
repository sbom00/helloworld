'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CupomOrderSchema extends Schema {
  up () {
    this.create('cupom_order', (table) => {
      table.increments()
      table.integer('cupom_id').usigned()
      table.integer('user_id').usigned()
      table.decimal('discount',12,2).defaultTo(0.0)
      table.timestamps()
      table.foreign('cupom_id').references('id').inTable('cupoms').onDelete('cascade')
      table.foreign('order_id').references('id').inTable('orders').onDelete('cascade')
    })
  }

  down () {
    this.drop('cupom_orders')
  }
}

module.exports = CupomOrderSchema
