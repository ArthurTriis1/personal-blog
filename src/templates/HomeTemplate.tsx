import React from 'react'

import HeaderImage from '../components/HeaderImage'
import { ImageProps } from '../components/Image'
import Layout from '../components/Layout'
import PostCard, { PostCardProps } from '../components/PostCard'
import { PostsList } from '../components/PostCard/styles'

export type HomeTemplateProps = {
  title: string
  image: ImageProps['image']
  posts: PostCardProps[]
}

const HomeTemplate = ({ title, image, posts }: HomeTemplateProps) => {
  return (
    <Layout>
      <HeaderImage thumb={image} title={title} />
      <PostsList>
        {posts.map((post) => (
          <PostCard {...post} key={post.slug} />
        ))}
      </PostsList>
    </Layout>
  )
}

export default HomeTemplate
