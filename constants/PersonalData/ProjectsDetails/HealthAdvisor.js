// This file is not mandatory, it just provides better separation. All data present here could be directly written in ProjectsOverview.js file.
// This file describes the properties of ProjectDetailsScreen for a given project.
// Array that is present here should contain only ProjectDetail objects
// ProjectDetail object should contain:
// Title of given section
// Gif/Webp/other type of image - can be in form of local image by passing require statement or in form of url by passing {uri:"https://example.url"}
// Content text displayed under a given title

import { ProjectDetail } from '../../../models/projectDetail'


export const HealthAdvisorDetails = [
    new ProjectDetail(
        "Genesis",
        // require('../../../assets/Gifs/HealthAdvisor/FirstPart.webp'),
        {uri: "https://lh3.googleusercontent.com/cYBnKX5CrVdl2gofHU8_eeTAPjQtvOfkjK634AZtr8WvhkdEdLJnnRqtfCWqoBhQVTH4YqZL8iHl1Qbdq2cB6l0tyfEjgOmK-UIO05CQwpGkYOTm_1ioazomNT8NLT0HanGTzGULA59MnCYk9zING6C-ZKjsT_DmWoB7vOxORo_p-1wLvlqXAk0RxhVyure2r7RAqeM8opzwSkAQVMJBwmk6sKVGCA-SKv1Cd7-qSq8s23h1LBe8GjX-43q_-CQHZ10XzDxhyuKIYN7jnrQWRApFl7MIUHFTKN2ukm5KH5nknK6wpMxTBLlnDszZJJh5QK0UNUyZxBRyxZGhM8pnNaI1w9N3W2_cYWrulb2ZWB2fPDhkoIKlTOjAg88IXueeTxveoHcsFhZ_qXr1aatIbwmjnN6EK3vHHs5cgGj4CGrJXc7i__j3SPqtUx9mUZk-KzEdwKt-3PiQDHD00wZQT6TY2AzkDg_VXtOzGnz9j1QZwYTLZ_KS4GkXyQs7LljrUHmbiM8neagWROFRfqAv5g0arh26WjZkg5AgdZtGj1-YkTqwqfyICePD5eRQ808aI_syYl0HdKFMeQe6x7786dcjnGrtu--T-fTA6zo4i3h-ooyQ9ZkztITkcgud4tGM-9SMSXPpls3EcMbFu6XEWFigYR3AILLJ8NLid7fUWlBVYdIo-R-amZXrgjN_RPBQ6cSMMWkqXb6pjXJixczuNx7awxPfS2SGQkYjWLJbviw7jwaQprswtA=w285-h616-no"},
        'I think health is the most important thing in every person\’s life, that\’s why when I found GetGuidelines API I decided to create an application around it.'
    ),
    new ProjectDetail(
        "Development Time",
        // require('../../../assets/Gifs/HealthAdvisor/SecondPart.webp'),
        {uri: "https://lh3.googleusercontent.com/qZ_uGzrnVi011opM5f5BJOxHqlJisikBf2mkjvS6h1G8_HoyaUkSkDSpwfaGPhOXqR_3PjWrHXR8zU1XqJj3sp7ztG1IjCgv55hr5wmy3gHoVipHiuhQUWQIV8HvTCLT1MbWHFx4lHYPfaMAwcoa1l08jQu0lZ8EG1qn7V7vrtwkHUDLIFgN8Bm3iL6yPO2x-u3F3pRGpuAx6UqFFZuWYjoI5QwFSwdcm5xmTF_QWCAflRo7X-3TBqQ8VvBK1gbgEXYyUzQZVR0E6X3WaJ9XWOPNEWRNFfjN6WBPfbdcNy-RAE7OIaZPqDrZOwKUOjFyP-fQEl1pAfJ_lXZ96OJLimDzzlZuFURMfh1bQ9RjcFFcwwuAqKTzMXgwxiAfXl-kFJQpF4L81n7iId2DALz_AR-OUH7gb0MyGFbuFNaBlTLy2PZzHmQXwSi8myM3fcM6E8yuiSLSK9VmNi6JhVztTN9GzAES7L3INieZop1zNEkuxu5AGrY_S6tFvKxL8zr-ebe7koaLSWuO0ZA_aSp4fKEkepCT0HOM5Ix6dfTAE_zpWKqDGg_KaA0btP44r-CT2TQ1Lila2cD2Wvpi625Ve-mzeOHooG2T5EPG-2N3bQN6t0MONgseg6Sx8CNNZYiLzfo66ItkddhXSiXv0zhraj_ZcWrXMjz8zJB5y9tC0ONK1tfTMlCw1wLAgwbXL3C7VVu3q2FFsuHNUeWWQMXR24G4V6qg6g-rd2y9tr_NbvCWyR3VI5_X7w=w285-h616-no"},
        'It took around 3 weeks of working 4-5 hours a day to complete this app.'
    ),
    new ProjectDetail(
        "History",
        // require('../../../assets/Gifs/HealthAdvisor/ThirdPart.webp'),
        {uri: "https://lh3.googleusercontent.com/MfW16aa3MTTGGvRcA_QLpHIb8QaU8Hx0A72F6uzBlsgtSgR2fANyLsBmAIj2YX_ByfmJK7EMXvQpkTAnfrZgUpQMq-Cfv5aiq7DaPsM6-izEVbQLCgW3FeVLmJCJQ40bC_NqxMG3HYuA4uVY9WT6iFzKiHH271PxGm2nvaxrHXqCgcB4sLcThahp9KdtJtIJTSHIluEPSMjXSFqRs78GBCtp36Fdb7NmUW9okwpdKfP9CvfZ-3S6CraY9eLv5z4uBGLWE56wYzKfJiYvKXHQAafW0IciZS_InIiFESczgLQnVhIISK6XkjmnxT8qw02wV-QSLgH52oUzv4EsKTtE4-9PujMyJmSWHcAS3Vq3UbsOt97SpUJc_4365kHWCrvmj7Ahd6B71UijxUXSbO8PyCSKozuoNPYo6YvGUykJi90il3u8_dLV8qt7seZly6W_4Qn3PckNK-tGZ769faWtlQlL-t2t8fV7O2ZyfZ2YHarEBDsSNsnwlbhflqILDmyE_TCFa-oWr7gIu30vnl0KxKvWSU2MfnXSKXVNTnpQwECmYmhxi_sfjEDpqgn1FRr0Dix6P2swoFwOT2qd43jk-BF8nfAzzS86s7zPqAmpRqPwPHQWLVy3eByitQoUpHIi_eVXvSNDNWRyzOPoWsxrXOKQCaq-ibYDL31Ftx72vCp1qLP8kkGFNYAqVgfVmStB6uYqzejUK1j-Bc9pNnDehAFPoG7e8lxkWCpp8jVrXTOBM_Gb01_4HQ=w285-h616-no"},
        'This was first application I made in React Native, which I planned on releasing. Because of that there was much to learn and every coding session included a lot of documentation reading. I really enjoyed it, because every single line of code taught me something new.'
    ),
    new ProjectDetail(
        "What I knew before starting this project",
        // require('../../../assets/Gifs/HealthAdvisor/ForthPart.webp'),
        {uri: "https://lh3.googleusercontent.com/FKiwe6bo-geEh85JL21BfrNBdLnm6OP1vAp4ashx1P0UG6SkC9RDbiJf0vdwQiuT2gt2cajdTNyfvfhyl1DIVDMtbgapUPwnGzs_cC1bRoSlCHWHkPpuCqF0OCyu20s4ugugzaOig5o6tlUKoOjHRMrF8pw097M0sxugCNUN2CDNL3tPeAsoJcHExE0cBv75grf4nYiR7_1cxdK-FaVIWAhnx5tNSAcs7iFKmUuTwJy3zz-lvfFFEuziCduj4W6YtUHpeUzftj1pYRvjKTToy-Gal8mi3bh_uxH6LZN2dN1gjQKWGqfauIOnHzxPVUczyHWBLhIKdwLjuncsKNhr69yOa4C2V8etgza7yzaf68J5VSLyal-3rQchulymHlNSrNE2l42ASEfEGL7NHv4KGseo9qNF12y1zrJrIQlAbtjUOfP6GRX1f21ArGFDS6VfWwwtPdYcmBAVWIbomDIStYm-04zhqXF4dkd2NUba59tlKSLBVVcIvC_X8xTCiE9bxvf_hkXepEt6Y8yR4FWA7VVH_-Qf07-ppSJ0msvgGw7yfNBk3fywDQQ-_hYe-YB2VlpJkxNWFCF5pxdMdTPzr0bneJ9Wf_hyHIVG9Q9zvl0heSrC3ko6jCuyz5IQMUgXp7UeR1InczeTewd7e_ORlcQGxjyOeK2VzV9P38t2K1bTnEfoxomIt9WHbMHuuPZtrXhGvWEoGnR_ffA5JQf6YLUxH10M1UjblktWs7xFjysJfJQcEwMgsQ=w285-h616-no"},
        'I knew how to work with mobile platforms, thanks to the experience I gained from creating apps in java. I had theoretical knowledge on how to work in React Native that I gained from the courses I took.'
    ),
    new ProjectDetail(
        "What I learned from creating this project",
        // require('../../../assets/Gifs/HealthAdvisor/FifthPart.webp'),
        {uri: "https://lh3.googleusercontent.com/19tvWo_mTIrqqoaaVBjifRfY-n9u3Zd-6VskKFAVr5frZ1k-tquR2Fs8nZJbwuKf6FM0GiqC_4tHGL5tFBpTy_UfNxHeL10LzTdnMqjaz0_9zXVX6Spqyei4qcyvQ4ZImlDzGE9anAL9gHyf6HXevSZbjLSActS7Z7EtPFjbGZAHqhk2SZxzam4wI42ZsCGBpIxbKvRFISMaHi5Ald3OtWmsA7RZF50EDEGGhL9Vnu14IDZnB_vA8_4rIhfSFHTdIHbxkQZQ-fbD9GEB0N6KYzw_u-yRE9JGul_2kvhPune-lXJdfu0owHc0ro6Od945s4sxz3siVaN1IZ7FXimdpoNbQVg0O8fW9E7cwuoIiSveVLUVNFUDe67bi4mC4E8lzIHed7sn3ZdApShTDGTraQ0ZPofp5GOlNXBz2p9FNc1hd3CKdQt2ezbhyb_ET6VwNBcMP0PhbdV8bRhmkVo2WGb25kj1Wx1sdv5Qlkx4eAeQinMPEXC5d0R66fWThgPdFfbCJz5-qyX2FFTYUZqe7Im-cbnZX0IEmdAcDc1CRCrVvh2TkTE_GzweRulZHkq8DLsEAoLyy-5zPSvhZnq73XyS78k4VYnHH25XL7gzP0goMRVnmzN2bZskkh-z-l6rBFIgQXphZ5PyM5R2BJYklssPe7ZcOfn5p82YYeAs5-kBwmlopCSkheQ6wzm9PepCrPRhrxvy7X7W1f9ac3pdhEvOP9jKWHCsUZbMGeZ0KiD5_zHnbKV6JA=w284-h616-no"},
        'I learned how to combine the knowledge I had about React Native into a complete application. I further improved my JavaScript and React Native programming skills. I also gained more experience on working with third-party API and third-party React Native libraries like Redux and react-navigation.'
    )
]