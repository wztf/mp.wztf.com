import { Text } from '@radix-ui/themes'

import { version } from '@/config/index'

const Page = () => {
  return (
    <>
      <Text>版本: v{version}</Text>
    </>
  )
}

export default Page
