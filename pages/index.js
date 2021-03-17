import { useState } from 'react'
import useSWR from 'swr'
import { Code, Page, Text, Textarea } from '@geist-ui/react'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const [value, setValue] = useState()
  const [code, setCode] = useState()
  const { data, error } = useSWR(`\api\toPython?curl=${value}`, fetcher)
  const handler = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
    
  }
  return (
    <Page dotBackdrop size="mini">
      <Page.Header>
        <Text h2>Convert CURL commands to JavaScript</Text>
      </Page.Header>
      <Text>
        Hello, I am using <Text b>Geist UI</Text> !
      </Text>
      <Textarea width="100%"
        value={value}
        onChange={handler}
        placeholder="curl https://example.com" />
      <Code block>{data && data.code}</Code>
    </Page>
  )
}
