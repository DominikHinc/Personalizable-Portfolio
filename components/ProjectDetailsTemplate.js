import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextWithGifSection from './TextWithGifSection'

// This component is used in ProjectDetailsScreen
// It creates TextWithGifSection component for every ProjectDetail object it receives.

const renderSection = (title, gif, text, index) => {
    return <TextWithGifSection key={title} gifPath={gif} title={title} text={text} reverseOrder={index%2 === 1 ? true : undefined} />
}


const ProjectDetailsTemplate = ({ data }) => {
    return (
        <View style={styles.detailsMainContainer}>
            {data.map((item,index) => renderSection(item.title, item.gif, item.text, index))}
        </View>
    )
}

const styles = StyleSheet.create({
    detailsMainContainer:{
    }
})

export default ProjectDetailsTemplate


