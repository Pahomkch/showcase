import '@testing-library/jest-dom/extend-expect'

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(() => ({
    t: jest.fn((str) => str),
  })),
}))
