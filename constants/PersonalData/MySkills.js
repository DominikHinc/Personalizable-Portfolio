// This file describes the properties of My Skills section
// mySkills array should only contain MySkillsColumn objects
// MySkillsColumn object should contain title and skills array
// Each string in skills array is separate row in a given skill column

import MySkillsColumn from "../../models/mySkillsColumn"

export const mySkills = [
    new MySkillsColumn(
        "Languages:",
        [
            'JavaScript ES6/ES7/ES8',
            'Java',
            'C++',
            "SQLite and SQL",
            "HTML/CSS"
        ]
    ),
    new MySkillsColumn(
        "General Programming:",
        [
            "Git Version Control",
            'REST API',
            "Design Patterns"
        ]
    ),

    new MySkillsColumn(
        "Frameworks:",
        [
            'React Native',
            'React',
            'LibGDX',
        ]
    ),

    new MySkillsColumn(
        "Smaller libraries:",
        [
            'react-redux',
            'redux-thunk',
            'react-navigation',
            'react-reanimated',
            'react-native-web',
            'react-native-sqlite-storage',
            'validate.js'
        ]
    ),

    new MySkillsColumn(
        "Technologies:",
        [
            'React Native CLI',
            'Redux',
            'Expo',
        ]
    ),

    new MySkillsColumn(
        "Soft skills:",
        [
            "Communication",
            "Persistence",
            "Fast learner",
            "Problem solving",
            "Always Punctual",
            "Adaptability",

        ]
    ),
]
