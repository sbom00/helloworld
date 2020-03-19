'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CupomUserSchema extends Schema {
  up () {
    this.create('cupom_user', (table) => {
      table.increments()
      table.integer('cupom_id').unsigned()
      table.integer('user_id').usigned()
      table.timestamps()
      table.foreign('cupom_id').references('id').inTable('cupoms').onDelete('cascade')
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
    })
  }

  down () {
    this.drop('cupom_user')
  }
}

module.exports = CupomUserSchema
