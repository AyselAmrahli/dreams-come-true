import { isInWatchList } from '../utils'

describe('Utils test', () => {
  const list = [1234, 45667]

  beforeAll(() => {
    localStorage.setItem('watchlist', JSON.stringify(list))
  })

  describe('isInWatchList', () => {
    test('should return true', () => {
      const id = 1234
      const isIn = isInWatchList(id)
      expect(isIn).toEqual(true)
    })

    test('should return false', () => {
      const id = 36473
      const isIn = isInWatchList(id)
      expect(isIn).toEqual(false)
    })

  })

  afterAll(() => {
    localStorage.clear()
  })
})