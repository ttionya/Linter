/* eslint-disable */
/* eslint-enable @typescript-eslint/consistent-type-exports */

export default 1

interface ButtonProps {
  onClick: () => void
}
class Button implements ButtonProps {
  onClick() {
    console.log('button!')
  }
}
export { Button }
export type { ButtonProps }
