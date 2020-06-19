module.exports = {
    title: "Workshop Azure Pipelines",
    description: "Create your first Azure Pipelines",
//    base: "/workshop-azure-pipelines/",
    port: 3000,
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'vgallet/workshop-azure-pipelines',
        // defaults to false, set to true to enable
        logo: '/9426.png',
//        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
//        editLinkText: 'Help us improve this page!',
        // if your docs are not at the root of the repo:
        docsDir: 'tps',
        sidebar: [
            '/1_GETTING_STARTED',
            '/2_THE_PROJECT',
            '/3_BUILDING_BACKEND_APPLICATION',
            '/4_BUILDING_FRONTEND_APPLICATION',
            '/5_VARIABLES_PARAMETERS',
            '/6_REDUCE_BUILDING_TIME',
            '/7_SECURE_VARIABLE',
            '/8_TEMPLATING',
            '/9_JOB_MATRIX',
            '/10_VOCABULARY'
        ]
    }
};
