const React = require('react')
const { house } = require('./data/house')
const { mount, shallow } = require('enzyme')

const { DataTable } = require('../src/DataTable')

describe('HouseDataTable component', () => {
  it('generates columns based on the number of attributes', () => {
    let a = [{ foo: 'bar' }]
    let b = [{ foo: 'bar' , fizz: 'buzz' }]
    const renderedA = shallow(<DataTable data={a} />)
    const renderedB = shallow(<DataTable data={b} />)
    expect(renderedA.children().length).toEqual(1)
    expect(renderedB.children().length).toEqual(2)
  })

  it('handles empty data arrays', () => {
    const table = shallow(<DataTable data={[]} />)
    expect(table.children().length).toEqual(0)
  })

  it('generates columns even for large objects', () => {
    let attributeCount = Object.keys(house).length
    const table = shallow(<DataTable data={[house]} />)
    expect(table.children().length).toEqual(attributeCount)
  })
})