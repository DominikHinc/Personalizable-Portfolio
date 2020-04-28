// This file is not mandatory, it just provides better separation. All data present here could be directly written in ProjectsOverview.js file.
// This file describes the properties of ProjectDetailsScreen for a given project.
// Array that is present here should contain only ProjectDetail objects
// ProjectDetail object should contain:
// Title of given section
// Gif/Webp/other type of image - can be in form of local image by passing require('..example/path') or in form of url by passing {uri:"https://example.url"}
// Content text displayed under a given title
import { ProjectDetail } from "../../../models/projectDetail"


export const GrocerEatsDetails = [
    new ProjectDetail(
        "Genesis",
        {uri:"https://lh3.googleusercontent.com/yCly3T3-oi-y_7BDT7Ot7K9Wxh3gMoFroPp5U5YhfKgN5EL_mWSOPYX8aarI5bCv9LrOQqpdxxPhnILKwWnMBeFeCyF51zUgQ2WroPz7Uokotwv0s11CVgv4QmrJyYCMKxlBg6tGU5KrDtXuLXvi-BoW7m9n-4-migZU6g-TF-gFZ4nBs8JCTpylQt8SysaECu4Uhlup5NkXU32YgJkb75Z6JKptWe_ZNOqBIbtwn5D_i6vXWEwVXAjOV8ZoRpYDpAFIY9fzfvZglUV_JO21SqSeajuE26PouZ2ahAlHgXTo9EfPJKiPzdewnmnc_4vKMqfmZ7QUPRIiNzFJk0R0H9vb_j9lnlT_hxbxFe8-ZZbIp5RGRErvkotW0SkPt1gSj5AcngDe5aQg8egkB5Iq9IOKUoN1-8DD0RhQ3O-wSJecFh51jVlDPMgsgGyocLlsDSokLyCI2wAAtjbZVyRF6ubr3vtGpgdb_Up2lL-kK6NaE0qrnbIr6DHdCQd54bO9sydhKhT2gXQV9f35BCcs9AJ6kwDmCrmNtrG7RAzM5fPl8HtVGNdHuQhiZL24IdDPNaoYoq8APEBki5vKR2cd0xHlAbbuJQzLfq2kxn7_eWFBLN20y_mrtFXzfmbgVzejN2BKOKQYAK_jn43EnV49GeJ37yIFQ2_aQkk_Jlva-WKHxkga-14mmlAbc8f1ke2aniCls9xh64m1NUXmFwjzZhfr7_hRLXeK-3xFFf80bYBPsiAw7sgI=w357-h775-no"},
        'Cooking is one of my hobbies, but the thing I hate the most about it is shopping for ingredients. When I asked my friends about their opinion, I got a similar response from them. That’s why I decided to create an app that will help improve cooking experience, by trivializing the most annoying part about it.'
    ),
    new ProjectDetail(
        "Development Time",
        {uri:"https://lh3.googleusercontent.com/S_YymeF08gDmpPIGjoCyxYVVPZlrXMFOteL0VzDoPmNMiMBvcydlOqf4fXDuG2jMujm04SljnnIyoMFcfe7geGnoZSMFKrOvt6mXpi87RxuxN0xDUeaGXVHKVK6FF1sKe3OlaC2EiSx3VvZwe9PouXqL5SaieXMUthYSPBhcsdsioAsKWshrBod5emC6rwOr7y9c0f8z0UUpvxiH7tloFdZ2ypY4APyXyvzjZw_0fDUhV02g7K2p4jXyXZ3P-sS8dFfXiPY6VHTcZeFVXLBoziY9UUR06J4QyiWZDdFdUU9ATiq9f8F1FwJTkf9z4Oz-NQs8DqJ5tr3_b1Tva8sGFFkeFtFivVbqE9fWY0D0iBVwFnh4GXyeww5l2nBnKS9Lp76GVAV89VK4q9HTwBrFB72N5B0Y4srZ_34CsUEHkyF8e4j1tcCwqqoi331ZAAOZjfBuO5S3QrWDb75u1NEQOIu48yhHM107jyJ34__C8VoxjXyI1ht6mDOkjirXtK6AvvjQBTNFJormHTEqdVm0snb_Q9D5vJf_c11NbRSZM2WLkM5toR0Mk96tCmQqlqRlj7T9abo2Fj-skxBhGMTa-0CC4U7OntFg3bN1i9uKdX75carSDW6tjMEb2KRTJT3tpC2_OnWM6VPLxZnuXx81FjoZsI9rMk7M_hSRGLP6F5AVwnlPXXBKDoNuNQraIOPRXnjvSkWq40rjUz3G37hMEgxsFkTZMOBdHMPHyWUcW3Q_vU8o-oFE=w357-h775-no"},
        'Development time of this app was very intensive. Because it collided with quarantine, I was able to work on this app for 13-14 hours every day for almost four weeks.'
    ),
    new ProjectDetail(
        "History",
        {uri:"https://lh3.googleusercontent.com/ErXGy39TG8fi3jH9gLNERWabH4QgKBSNynpM0bzo_prYZ03xufxOXL_bUqrtPOkZ85q7fSoUSbmAUVPt0jsoRZxVB1d7I6reE-BoL3pznUv4jJMsHYmBIYws7yK6hhIXkFjKIq_b0eCyB7yvWYD1RTKNnxqpT_EGil2MILSW1tyWvAKQxNgBvwppRlE3s4X46OTfB5b_J5cOGWWONQIqs-E84xjYviYyL9b-iHHyDuy7ZhCPAxYOO5XIe1FzGP_C9TwRaUR0124lWMLh_fI2jxvXSZ3bgCcn5AwB9VljU7L0jIIp1ApzZbVxK_junJ3QR4EvqSEmivn5yqColqbiOYF8vGyDeufcMZ01yGsqf1mSn-w2OtL3fzoQIGkwDpXSmZszEEl-xksvCU54JqBH54mIbos_OjBoj_L9B-ijS0_Md9-xmknXyipcfOfac5kwxU4U_c_Z9DOGBPQM_YrEIyTlQq0e51Zow1X4-8CmFNSQx5Avq2ysTA_j7NN46asBM1lfGvXB2QzMj0zNQQZdydBk7HatZuqu-7orkPGva0LPTatgltakBpGBqGTd4Pamvpi5hODMcee3lTRyCEKAV4XgWyxqFkv0hNIB2SbnX6sIS5ObU6rXM0t6gY7hfQ_RVeuWTkdjvHEKYBKDlrjAi7uCksIJsSUm40qpvxNF9_0dnDW_cilSo5wMScS2FDIMgz4GUFQBalRb0QSdH_INe1NDFgvFTgX2FLtmx6k9T0MT33RGuaKJ=w357-h775-no"},
        'Development process of this app was very straight forward. I had a plan and a lot of free time to implement it. Beside few testing sessions I had with my friends, most of my time was dedicated to coding and learning how to further improve the user experience.'
    ),
    new ProjectDetail(
        "What I knew before starting this project",
        {uri:"https://lh3.googleusercontent.com/8jcC_iwfN5UfPapRMp7wFnl56_n7flvtSVYipyvyXH2dMr4tEirZuMdFHfkZXsc1WO3gSYWr1scEcUpA83hJzTgg_2en5lXyaOnJfZVrI8PBQTVfi57Toa7FiP7p1Hn0wXTEjNmYj6eYDHOpPnIMXTB5Uel94dfrKcdH2weRs0mZEgaBeNg3nKzotUsGRkb6aWcXccoB87mda-a_kV_siQgIMbZMHHFIGW8e6Y0r9tXlDOapMLMNtD7L-uGaZ1m5oZMmQr9ENomVYjNEQwOzzWpctuPKsSp4OVVZ-BjolqswjWJS1vz3XfAejzz2NO4csI8Bxoo-IDCYMfyJGkYCwPw-IuvkSOBKnNlNHDwk46kOX4u9OJ5iM7FQL_L-qjh_0EH08acAQ-5C46eqj7H3oqQF5Mo1Rpl8LLqCJJSOOrwTh6-IXA6X87jCPawans83n9oLXKlcepLUhLgOkU8XMwuMy_cX6-1WNOeAqQI7yS6TML0FgziTzr5TqHanMaGPcqEAUBwzQA72roiMlRVGDXwJBU2vK07UAHKUqOfdKac3GskysfWLZHBOTmo1KfjhdwbE2JPgFKsP9XonbzMdjpLsnYfLq8i_HHEo4xus7xLjzTSk6U_oeCq05ZdFki_GGX8Aw7MSwzzrgfWL06efS78F8holR-aO9x-cbzMDgClkM06_Awe7YSMeEQhHlhzxNqCF5kfB4BcpLZCZiUZdvw9a1nwQH9VruUVF-zBXzpQX7H7OuMp0=w358-h775-no"},
        'I knew how to create an app in react native from start to finish thanks to experience I gained from Health Advisor and few other minor projects. My experience in Java also helped a lot with planning and designing. I knew the basics of SQL I learned from school.'
    ),
    new ProjectDetail(
        "What I learned from creating this project",
        {uri:"https://lh3.googleusercontent.com/ymGiBBO_hUYEaX35qY1vGGPpStBDWh3eVwbw9kj9otDug8ybvkr7R39tjv1mZBFNoV8qWZixKvo2InI5gbjViiPN2Kyswv9BBvb95ClFavfv1Oh4ICpHZVTVXZplExScsK7luGIoHHe-MrJUbP3FtKOwDrcIi4naKgULkB9uMteyvgz8HRyvMnqJ-VJBGXecBQMt30jgZNGuiDYlwev-fWLavNEnlWl4BJof0wvJXn7WKKWKtzb9titVH0RyUCK5RUKGWuDc9EOUCicdg3_IHJo2kflaRg7McoB_8J5TOyps2sDrdFjkCiHQDfaiXN6f4ppJ5cnIw-ZruVxeYt6Ic3lZzqyNIMLpLO1diFsJUPIhib4HgCTwWEkqrcyKWR3a_G8i5dGivrrw7hmuuXsQEzLAtRNSDj85KI24uGWN2PqL4pehvr-6N_9xkT_EPDfbx1PVwXfWE5V21Ht10JYXBLyHvAdtSpuu5iK4vikhS__ktdGtrorlpsA1VMM3QbCKdhSEyT4Gs0b2BCLSV_S8vQ-JeCkhCTEeZsLBw_786V3jtt-Qqujqf_Y3Y98T7toHbIGj9rr322wHh2xjcSkkCg6kq6zntCkAwT_dm6nrhagZIGYBfQ8C6bDoT_ui97kqNGpRDTiGJIj6xAmYJSJ7A6n4y39ONgHvKSR_zbHJYMAQjFw32cW0QtCMGdLMwAo5HITJdK5AMFbe9hNruMNSiXdA7SA-HPJl8oNSWiuvoK-ZFMvmgG-S=w358-h775-no"},
        'I learned how to truly polish an app to make it look and perform good on every device. I further improved my Redux skills and first time used in app my knowledge about SQL. After a few days of intense work, I also learned how to better organize my time in order to stay constantly productive during long coding sessions.'
    )
]