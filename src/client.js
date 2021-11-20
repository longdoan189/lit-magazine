import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId: "inu5zxa1",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: true
})