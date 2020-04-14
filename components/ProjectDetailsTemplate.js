import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextWithGifSection from './TextWithGifSection'

const renderSection = (title, gif, text, index) => {
    return <TextWithGifSection key={title} gifPath={gif} title={title} text={text} reverseOrder={index%2 === 1 ? true : undefined} />
}


const ProjectDetailsTemplate = ({ data }) => {
    return (
        <View style={styles.detailsMainContaiener}>
            {data.map((item,index) => renderSection(item.title, item.gif, item.text, index))}
        </View>
    )
}

const styles = StyleSheet.create({})

export default ProjectDetailsTemplate


