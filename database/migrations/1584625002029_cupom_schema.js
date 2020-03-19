'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CupomSchema extends Schema {
  up () {
    this.create('cupoms', (table) => {
      table.increments()
      table.string('code',100).notNullable()
      table.datetime('valid_from')
      table.datetime('valide_until')
      table.integer('quantitiy').defaultTo(1)
      table.enu('can_use_for',['product','client','product_client','all'])
      table.enu('type',['free','percent','currency']).defaultTo('currency')
      table.boolena('recursive').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('cupoms')
  }
}

module.exports = CupomSchema
