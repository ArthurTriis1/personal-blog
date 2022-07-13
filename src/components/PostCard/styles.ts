import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

export const WrapperLink = tw(Link)`
    w-full rounded my-3 md:m-3 md:w-fit
`

export const Wrapper = tw.div`
    w-full md:w-96 rounded overflow-hidden shadow-lg my-3 md:m-3
`

export const DataWrapper = tw.div`
    px-6 py-4
`

export const Title = styled.h1`
  ${tw`
    text-primary text-xl mb-2 font-default font-bold 
    `}
`

export const Time = tw.span`
    inline-block
    bg-accent
    rounded-full 
    px-3 
    py-1 
    text-sm 
    font-default
    font-semibold 
    text-primary
    mr-2 
    mb-2
`

export const TimeWrapper = tw.span`
    pt-4 pb-2
`

export const PostsList = tw.div`
    mx-auto
    w-full
    p-4
    md:w-4/5
    md:p-8
    flex
    justify-evenly
    flex-wrap
`
