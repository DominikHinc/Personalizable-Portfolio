import React, { useContext } from 'react'
import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import BottomLinkButton from '../components/BottomLinkButton'
import BouncingCallToActionIcon from '../components/BouncingCallToActionIcon'
import Footer, { FOOTER_HEIGHT } from '../components/Footer'
import ProjectDetailsTemplate from '../components/ProjectDetailsTemplate'
import { projectsOverview } from '../constants/PersonalData/ProjectsOverview'
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight, normalizeMarginSize, normalizeWidth } from '../helpers/normalize'

const ProjectDetailsScreen = ({ route, navigation }) => {
    const { colors } = useContext(ColorsContext)

    const { title } = route.params;

    const project = projectsOverview.find(item => item.title === title)

    const insets = useSafeArea();
    const verticalView = Dimensions.get('window').height / Dimensions.get('window').width > 1;

    const currentContentOffset = new Animated.Value(0)

    const onScrollHandler = (e) => {
        currentContentOffset.setValue(e.nativeEvent.contentOffset.y);

    }

    return (
        <View style={[styles.screen, { backgroundColor: colors.first }]}>
            {!verticalView && <View style={[styles.callToActionIconContainer, {width:normalizeWidth(50), height:normalizeHeight(50)}]}>
                <BouncingCallToActionIcon currentContentOffset={currentContentOffset} iconColor={colors.font} />
            </View>}
            {project.buttonConfig.link !== undefined && <BottomLinkButton buttonConfig={project.buttonConfig} />}
            <ScrollView style={[styles.scrollView, { marginTop: normalizeMarginSize(TAB_BAR_HEIGHT) + insets.top }]}
                contentContainerStyle={[styles.scrollViewContainer, { paddingBottom: normalizeHeight(FOOTER_HEIGHT) }]}
                onScroll={onScrollHandler} onMomentumScrollEnd={onScrollHandler} onScrollBeginDrag={onScrollHandler} scrollEventThrottle={1} >

                <ProjectDetailsTemplate data={project.projectDetails} />

            </ScrollView>
            <Footer absolute={true} leftSide={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

    },
    callToActionIconContainer: {
        position: 'absolute', 
        bottom: 0, 
        zIndex: 1,
    },
    scrollView: {
        width: '100%'
    },


})


export default ProjectDetailsScreen
