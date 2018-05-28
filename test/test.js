import test from 'ava'
// import p from '../src/index'

// test('test dynamic import', t => {
//   return p().then(_ => {
//     t.true(_.isBoolean(false))
//   })
// })

test('test dynamic import', t => {
  return import('lodash').then(m => {
    const _ = m.default || m
    t.true(_.isBoolean(false))
  })
})