export const isDevelopment =
  process.env.NODE_ENV !== 'production'

export const isRenderer = process.type === 'renderer'
