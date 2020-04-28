// This file is not mandatory, it just provides better separation. All data present here could be directly written in ProjectsOverview.js file.
// This file describes the properties of ProjectDetailsScreen for a given project.
// Array that is present here should contain only ProjectDetail objects
// ProjectDetail object should contain:
// Title of given section
// Gif/Webp/other type of image - can be in form of local image by passing require statement or in form of url by passing {uri:"https://example.url"}
// Content text displayed under a given title

import { ProjectDetail } from '../../../models/projectDetail'

export const BounceBackDetails = [
    new ProjectDetail(
        "Genesis",
        {uri: "https://lh3.googleusercontent.com/FU-uyiRIeKyGENs0cmc7-LgqxD3ZTJq58hbADmRytEHdI-iiPZtt7x_KTaGiDoYuXvv1HqkQgx8BzTOK8xmrLSX1nDme3I9Hrk3PgsnAE5iODZzAbY7w1leuWvusbXk_FzriFJow8ijaNSmC-Q5qoEaA1V-qrRxlT0cEqcGECcn0LeWs4uyXMR3_PugWC_uf3ePAttSeinmJOCaxD-ecRjs9kLoHVky99Y1-jAPt2zsbijDitwQuwe2Z1-MHSlzVA3wt548cOJJHHOqT0s3zw_RLWQ7TjKwJCuewv-1YYoF6wJh3FwoZHu5dfjePOOvW6HjiEmLsAGoJ346T4f5lj6JjIef9c2Rv47MhoZ-rSfeqpPnRNHtTW9sYDmUqrmcXXl0cvlSSCw0uTbWQ4E_OGuN2rW2j-FrgnixWeesAU6d0Ng48-WRQWdQULPuXuMACQqrlS8Lz0HVK1iGy_hF9O_J3AHYPWplt3NgzOVZJGxHWmzKRYCdR7CVcLl6VCJiEdAla1WU-GPFZ94V4M7m6VO2Zq3oX2-DcVoEZYxZu3HBSD_-2kJt1h1AahBAfLQgzlf4nqMe_KCxqk15cf1FCVNXlrteFig_UFEEe5VTM9MsRrhcq2EGLgowhJk5MuYt2eklwrh0KEDivvuBY21JgunqJ831iTdfB_SCoEd0Woy1KYm3CjlgUTIKamnLIgqGWeT5JW3SdaOeiu_ePTBrxGoX3y23cQ4SDuo9ExRtIeloIba6ZDaP3HQ=w284-h616-no"},
        // require('../../../assets/Gifs/BounceBack/Gameplay.webp'),
        'I have always wanted to create a game, but due to my lack of drawing skills I had to create something that would base mainly on geometrical shapes. The rule-set presented by \”Don\’t touch the spikes\” seemed perfect for me, so I decided to replicate this experience and improve it with my own ideas.'
    ),
    new ProjectDetail(
        "Development Time",
        {uri: "https://lh3.googleusercontent.com/Bl5Ex-aSFWgkA6Mhzh45cnssGw87MqdERAkTTZENgeluriRXj2cLVToeNZGymF8SHX5ztyKgt8tNIOKsY8k6qVXxoTgwwPzr3DMMECqItECb5kHhFBPo-XYMLQfKlg3XCBbARwtInReBlLEwlnpwFMpSHrVxTTq7ZTUmUzbQZMSsBK1DIE9D8xeHkyEwranYNUe8gimvGW8vAwy7crMUh4utF7KPhBlbA6qj9bht9u4RA3u6r7ZB3omLBng02o3rO4SnOlR3nGIZ2VfjSU9sJZ1lrMCFKuM5JP-KXg-xHVJPV8V-2kcrcro2jIkGKamZglSb_V1EkxJcGg-WdKJS9IRacCkpsAz9v7JzvSqKsuOROZo2jEOH71JmBMTQgpX6tmTPsMAnKoW9-Z66K-hhGEjWx92_fcUcisVTxxqzSSeISP5N_k2GvvyeS5BTlA7pDgM28lX5SlJHX5VRRz-1uZxNKjCW48ZedLne-svUVi0UuOhCFcWF7xptfvHpQK06Bb0tIe7lHV8njf57jvRYmI6ieSSDqKkFc6bLK_YO174vJ9VXiu4GcyQew1XDdoYZnrRToLL-dkyfWnU1UrCxBUzLpmcj0gwoF6pNyt71-fEW46UklGG8xxkX1lIY4RY7CWAVLw_gsuqf2esZtuvccfttwd9UgKbQ0Ra7w_pS1GnZlCFif1tpQYLYMVLyiHxHArE1vlxufy5n-sgSfU2JdynMpUWAImgSnKVs0bDcwkgoYG60uTQ4Hw=w285-h616-no"},
        // require('../../../assets/Gifs/BounceBack/Plusfive.webp'),
        'It took around 3 months of working 3-4 hours a day to complete this game.'
    ),
    new ProjectDetail(
        "History",
        {uri: "https://lh3.googleusercontent.com/xkW2_MPHNA-yVvEww6bVSw7ylurYDn0G8fGhsh2c5gu6IxqlMfZMPhexWgLk5ykS4jBC6lZ6dnOATqoyAMme6eVF1ifemyVbJ6-B2N5XNl_s9cDFFTFpatNUpHw-EsrlLzXt1qczDqU2N2_Kl2bsGxJIKfi1Z4Dl7K9huVai-dTxmEMyxv_5GWg9FlFB1zCQrbirsorx2uKBRqi3p_0yU0VpSKoPaRBYF85kYrXeQm7Gm3DDOo-rdKp-QXMf7_SxxXOxLKN8JbfMmIeJ4thkB9xzwKuaCPmZYfLFgFIUgZuzV2Coaydu8fZiqb_6l4rFF5kDReBzuEjEUH_7RaX6aFgp_aSf8KvLc3psztkOB0OmBJs-4t6IvyekW_ZlWLe1VbCHQ8QJpPYz09gnAIQxubfNmOspR87hr9urcFeQRhqR6O9Dha4c1o_88Ifmtblw8xg-iuuE75G7JgjKVU4a4DqwmFa1Ylze5v_XwYENVLnZSGiX353B1zT9TyPzxo1Jw8aLJty_-EMEZnrGjZban9x2mHuK3f1H1N69Xp5V6AUIQdAThCRPVWbIiclGQnZOQjGmdqlIV6fyb7fLZOJ5AlvzzpwdDlZaABSH7Ge_JYWxzn-0v5Ezy1WOD6jUMmfzrRDFAKPnjaPK90FTubF7Dzussd2zqALJfueHgLB1ZLNOYxBryAl5uXC-7925KUhGPMJPQMvS06CNYGtH1rVm2z0Df9EaxYpXoLhoXn75x6aSgH8Yx_vRRw=w285-h616-no"},
        // require('../../../assets/Gifs/BounceBack/Colors.webp'),
        'The process of creating this game was very enjoyable. There was always something new to try and learn. Because making a game is such a unique experience, I think every developer should try it at least once.'
    ),
    new ProjectDetail(
        "What I knew before starting this project",
        {uri: "https://lh3.googleusercontent.com/XBKLy0cd26uqcv4T6sFQeBn0efpQulloMzH2F_LpTu4iZqVl-YUkr1sYwmqtnyBZ3zmsFF3XYAJreHuTsUBmaEUfVfNtfTg8wgWQbC5RSpp3i2dfwIbn4_o49IGz4adY93-xHaXSPwmvXTRYjP32KrEuSugxqgLGpxUJG77VDj-DQed9vhNKm_rkaHFTKnKsDdMAwTPm9blZkOzUuKEL1tmSYq2W9R7Gw70XhC3eeiQWyjthtrplHDtqmY1xZuHSOSb82XaapfouQBR1OobumQgsjYzYiOP-MsrHcP1-y03bxEs-cZWfuRmoVYMgxa45mvzADTFW2xwMBskh9L5RVc26-a25gl-_9qp5VqzBVIoOve-gIcxodGLUTv1ljlhEVzr1vUt6yQKSklKoKAmWH45qvgVLoJxNyek2OBfCvA28ZavyFXVlNs11hz3rKgLF_jcSf0OQIKf6QNk0CdKXzz8WSt_dGbbtrhjo5VU0J-S2QsJJAVZEc2utg021n_dddOBDYjxaA1UMsrvVdcj8yMPHh7LQ7jhRSD0ZcD0zU4M3JfUJjs8fPn8OxvFnQO6U93nI8P1kBb2ZqILbwK2Hhc0K1usf8UZHJRendfvRn2CCWsJES6WFFbeo25WvZx6_YQA1uV4Vrmfb4quLUFYRyZ7NR_lTyY4JFoWlTd7SmBhRCNj6vCz_m_lySnBWkNJJSJ5X3M5wuLAwDGGTbZ7UPNxwmkr9eILuYA_NxV6WC7KMlARrpRhjww=w285-h616-no"},
        // require('../../../assets/Gifs/BounceBack/Shield.webp'),
        'I knew how to develop an app from start to finish in LibGDX thanks to experience I gained from creating WordFishing. I also had knowledge of how games work and how they should be designed.'
    ),
    new ProjectDetail(
        "What I learned from creating this project",
        {uri: "https://lh3.googleusercontent.com/j8VQT6MnddMIETU-4OkkmV563MqmlmuYPWpk6JZPqvrfbBUH4Fra6viMCXU-FzfZ1qND-t45BDHgmtFMYwDpn9Rs1aITNZqbbpPLrmAsqK0z6GBRO2YX-7ifFoT1cBeifqUxccC5DmW00lhb0SkIIRgNoJSwgz0A1iEs5FARQw9XaBwvfZaIHRkNgJ_jDz6JjQCyrF9pTBV1AmerF8uMEfcr-yTMHfvMOK3_aGc7Lpl5eHpAd2RE7Zmo7edyRnUzhsibgjDcLqMbEAIzPdU6Eij1kMwnDDwYUCtrqHGFm-xYl5KqBotEfDgrMxEJMjjY-pw1tU_RGnQNcy8uuscVj6VAhZOO_XtaHJazI-gEH6HDluiIHAjEWKXi7SmMkOq09403uy0_t7hI4dpI9w7kvQeyhWzbvDxCEr7d9s3hcISC6o_qgZViNXJDH4a2iTtTZnDe7L1WHj7uF7pNQ1J_XXcCbYHR30BurAc31_RFOCPj8zG6y0XDNPKp0ajCFFRBGsWj3bgaTWf2tnQareXFA-w21YJ5Ok-Ah6fV2QO5v5VLfM_DXI6E9sbADI1mdoVPKUrpLD27QmdpDIgq3BUoSjPlsqsGdHRkqzpIMoQpyaxAlJ0kGqKvzG0qwFA4aucSacRnJH6KDBa09GNQTkWySu7UDrJww7lSoW3Y7vzuxFo1lQ-CqsupJ9vIWJsLJC23DkAuLrt_r3suJy1IsWXLLFCGznvchKZsHSYpfmNoi0ybdEQB-fqZIw=w285-h616-no"},
        // require('../../../assets/Gifs/BounceBack/Scoreboard.webp'),
        'I learned how to create dynamic user experience, how the lighting works in games and how controls should be handled. I gained knowledge of how 2d physics engines work and how to texture them properly. I also learned much about games render cycles and further improved my java programming skills.'
    )
]