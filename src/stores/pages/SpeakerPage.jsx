import React from 'react'
import { speakerData } from '../data/speaker'
import CategoryPage from '../components/CategoryPage'

function SpeakerPage() {
  return <CategoryPage data={speakerData} basePath="/speakers" />
}

export default SpeakerPage
