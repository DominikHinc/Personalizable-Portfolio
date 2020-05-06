import React, { useContext } from 'react'
import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import BouncingCallToActionIcon from '../components/BouncingCallToActionIcon'
import DefaultText from '../components/DefaultText'
import Footer, { FOOTER_HEIGHT } from '../components/Footer'
import ProjectDetailsTemplate from '../components/ProjectDetailsTemplate'
import ProjectLinks from '../components/ProjectLinks'
import { headerSecondaryStyle } from '../constants/FontStyles'
import { projectsOverview } from '../constants/PersonalData/ProjectsOverview'
import { TAB_BAR_HEIGHT } from '../constants/TAB_BAR'
import { ColorsContext } from '../helpers/ColorsContext'
import { normalizeHeight, normalizeMarginSize, normalizePaddingSize, normalizeWidth } from '../helpers/normalize'

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
            {<View style={[styles.callToActionIconContainer, {width:normalizeWidth(50), height:normalizeHeight(50)}]}>
                <BouncingCallToActionIcon currentContentOffset={currentContentOffset} iconColor={colors.font} />
            </View>}
            <ScrollView style={[styles.scrollView, { marginTop: normalizeMarginSize(TAB_BAR_HEIGHT) + insets.top }]}
                contentContainerStyle={[styles.scrollViewContainer, { paddingBottom: normalizeHeight(FOOTER_HEIGHT) }]}
                onScroll={onScrollHandler} onMomentumScrollEnd={onScrollHandler} onScrollBeginDrag={onScrollHandler} scrollEventThrottle={1} >
                
                <View style={[styles.linksContainer, {position:verticalView ? null : 'absolute', zIndex:verticalView ? null : 2, paddingTop:normalizePaddingSize(10),
                right:verticalView ? null : 0, width:verticalView ? null : '50%'}]}>
                    <DefaultText style={{...headerSecondaryStyle,marginBottom:normalizeMarginSize(10)}}>Available on:</DefaultText>
                    <ProjectLinks buttons={project.buttons} />
                </View>

                <ProjectDetailsTemplate data={project.projectDetails} />

            </ScrollView>
            <Footer absolute={true}/>
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
