// import { Anchor, Button } from 'tamagui'

// export const MyButton = ({ pagesMode = false }: { pagesMode?: boolean }) => {
//   return (
//     <Anchor text="center" color="$color12" href={pagesMode ? '/' : '/pages-example'}>
//       <Button>Change router: {pagesMode ? 'pages' : 'app'}</Button>
//     </Anchor>
//   )
// }

// packages/ui/src/components/Button.tsx
'use client'
import { Button as TamaguiButton } from 'tamagui'

export const MyButton = (props:any) => {
  return <TamaguiButton {...props} />
}