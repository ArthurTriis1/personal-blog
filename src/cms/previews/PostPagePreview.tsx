import React from 'react'
import { marked } from 'marked'

import PostTemplate from '../../templates/PostTemplate'
import WithStyled from '../utils/WithStyled'
import { PostCardWithoutLink } from '../../components/PostCard'

const PostPagePreview = ({ entry, getAsset }: any) => {
  const data = entry.getIn(['data']).toJS()
  const image = getAsset(data.thumb)

  return (
    <WithStyled>
      <>
        <PostTemplate
          thumb={image}
          title={data.title}
          html={marked.parse(data.body || '')}
        />
        <hr></hr>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <h1>Thumb Preview:</h1>
          <PostCardWithoutLink image={image} title={data.title} time={1} />
        </div>
      </>
    </WithStyled>
  )
}

export default PostPagePreview
