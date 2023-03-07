/* eslint-disable */
/* eslint-enable @typescript-eslint/no-mixed-enums */

export default 1

enum Status1 {
  Unknown = 0,
  Closed = 1,
  Open = 2,
}

enum Status2 {
  Unknown,
  Closed,
  Open,
}

enum Status3 {
  Unknown = 'unknown',
  Closed = 'closed',
  Open = 'open',
}
