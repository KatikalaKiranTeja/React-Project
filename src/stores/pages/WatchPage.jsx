import React from 'react'
import { watchData } from '../data/watch'
import CategoryPage from '../components/CategoryPage'

function WatchPage() {
  return <CategoryPage data={watchData} basePath="/watchs" />
}

export default WatchPage
