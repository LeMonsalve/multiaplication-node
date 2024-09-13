import yargs from 'yargs'
import { hideBin } from "yargs/helpers"
import * as process from "node:process";

export const yarg = yargs(hideBin(process.argv))
.option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'Multiplication table base'
})
.option('l', {
  alias: 'limit',
  type: 'number',
  default: 10,
  describe: 'Multiplication table limit'
})
.option('s', {
  alias: 'show',
  type: 'boolean',
  default: false,
  describe: 'Show multiplication table'
})
.option('n', {
  alias: 'fileName',
  type: 'string',
  default: 'table',
  describe: 'Table name'
})
.option('d', {
  alias: 'fileDestination',
  type: 'string',
  default: 'outputs',
  describe: 'Table destination'
})
.check((argv, _) => {
  if (argv.b < 1) throw new Error('Base must be greater than 0')

  if (argv.l < 1) throw new Error('Limit must be greater than 0')

  return true
})
.parseSync()