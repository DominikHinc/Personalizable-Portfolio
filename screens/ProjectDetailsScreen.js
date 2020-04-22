import React, { useContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import BottomLinkButton from '../components/BottomLinkButton'
import Footer, { FOOTER_HEIGHT } from '../components/Footer'
import ProjectDetailsTemplate from '../components/ProjectDetailsTemplate'
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight, normalizeMarginSize } from '../helpers/normalize'
import { projectsOverview } from '../constants/PersonalData/ProjectsOverview'

const ProjectDetailsScreen = ({ route, navigation }) => {
    const {colors} = useContext(ColorsContext)

    const {title} = route.params;

    const project = projectsOverview.find(item =>item.title === title)

    const insets = useSafeArea();

    return (
        <View style={[styles.screen,{backgroundColor:colors.first}]}>
            {project.buttonConfig.link !== undefined && <BottomLinkButton buttonConfig={project.buttonConfig} />}
            <ScrollView style={[styles.scrollView, {marginTop:normalizeMarginSize(TAB_BAR_HEIGHT)  + insets.top}]} 
            contentContainerStyle={[styles.scrollViewContainer, {paddingBottom:normalizeHeight(FOOTER_HEIGHT)}]} >
                <ProjectDetailsTemplate data={project.projectDetails} />
                
            </ScrollView>
            <Footer absolute={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
      
    },
    scrollView:{
        
        width:'100%'
    },
    
})


export default ProjectDetailsScreen
