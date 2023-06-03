import React from 'react'

import { getPosts, getPostDetails} from '../../services';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components/Index';

const PostDetails = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="gird grid-cols-1 lg:grird-cols-12 gap-12">
          <div className="col-span1 lg:col-span-8">
            <PostDetail/>
            <Author/>
            <CommentsForm/>
            <Comments/>
          </div>
          <div className="col-span1 lg:col-span-8">
            <div className="relative lg:sticky top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PostDetails
