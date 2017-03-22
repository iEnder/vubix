module.exports = {

    pages: [{ name: 'Dashboard', icon: 'fa fa-tachometer', link: '/dashboard' },
            { name: 'Mailbox', icon: 'fa fa-envelope-o', rest: [
                { name: 'Inbox', icon: 'fa fa-inbox', link: '/mailbox/inbox' },
                { name: 'Mail', icon: 'fa fa-envelope', link: '/mailbox/mail' },
                { name: 'Compose', icon: 'fa fa-comment', link: '/mailbox/compose'}
            ]},
            { name: 'Gallery', icon: 'fa fa-picture-o', link: '/gallery' },
            { name: 'Social', icon: 'fa fa-share-alt', link: '/social' },
            { name: 'Blog', icon: 'fa fa-id-card', rest: [
                { name: 'Posts', icon: 'fa fa-columns', link: '/blog/posts' },
                { name: 'Single Post', icon: 'fa fa-columns', link: '/blog/post' }]
            }],


    components: [{ name: 'Panels', icon: 'fa fa-square-o', link: '/panels' },
                 { name: 'Charts', icon: 'fa fa-bar-chart', rest: [
                     { name: 'Vubix Charts', icon: 'fa fa-area-chart', rest:[
                     {name: 'Line Series', link: '/charts/vubix/line'},
                     {name: 'Area Series', link: '/charts/vubix/area'},
                     {name: 'Bar + Column Series', link: '/charts/vubix/bar'},
                     {name: 'Mixed Series', link: '/charts/vubix/mixed'},
                     {name: 'Pie + Donut Series', link: '/charts/vubix/pie'},
                     ]},
                     { name: 'Chart.JS', icon: 'fa fa-line-chart', link: '/charts/chartjs' },
                     { name: 'C3.JS', icon: 'fa fa-line-chart', link: '/charts/c3js' },
                     { name: 'Morris.JS', icon: 'fa fa-pie-chart', link: '/charts/morrisjs' },
                 ]},
                 { name: 'Static Timeline', icon: 'fa fa-clock-o', link: '/timeline' },
                 { name: 'Interactive Timeline', icon: 'fa fa-backward', link: '/interactive-timeline' },
                 { name: 'Codemirror', icon: 'fa fa-code', link: '/codemirror' },
                 { name: 'Maps', icon: 'fa fa-map-marker', link: '/maps' },
                 { name: 'Editor', icon: 'fa fa-pencil-square-o', link: '/editor' },
                 { name: 'UI Elements', icon: 'fa fa-toggle-on', rest: [
                     { name: 'Buttons', icon: 'fa fa-square-o', link: '/ui-elements/buttons' },
                     { name: 'Dropdowns', icon: 'fa fa-chevron-down', link: '/ui-elements/dropdowns' },
                     { name: 'Tabs & Navs', icon: 'fa fa-mouse-pointer', link: '/ui-elements/tabs-navs' },
                     { name: 'Sliders', icon: 'fa fa-sliders', link: '/ui-elements/sliders' },
                     { name: 'Knobs', icon: 'fa fa-circle', link: '/ui-elements/knobs' },
                     { name: 'Modals', icon: 'fa fa-window-maximize', link: '/ui-elements/modals' },
                     { name: 'Messenger', icon: 'fa fa-comments', link: '/ui-elements/messenger' },
                 ]},
                 { name: 'Forms', icon: 'fa fa-file', rest: [
                     { name: 'Controls', icon: 'fa fa-fire', link: '/forms/controls' },
                     { name: 'X-Editable', icon: 'fa fa-pencil-square-o', link: '/forms/editable' },
                     { name: 'Wizard', icon: 'fa fa-wand', link: '/forms/wizard' },
                 ]},
                 { name: 'Tables', icon: 'fa fa-table', rest:[
                     { name: 'Bootstrap Tables', icon: 'fa fa-table', link: '/tables/bootstrap' },
                     { name: 'Datatables', icon: 'fa fa-table', link: '/tables/datatables' },
                     { name: 'Tablesaw', icon: 'fa fa-table', link: '/tables/tablesaw' },
                 ]},
                 { name: 'Grid', icon: 'fa fa-th-list', link: '/grid' },
                 { name: 'Calendar', icon: 'fa fa-calendar', link: '/calendar' },
                 { name: 'File Utilities', icon: 'fa fa-folder-open', rest: [
                     { name: 'Dropzone', icon: 'fa fa-inbox', link: '/file-utils/dropzone' },
                     { name: 'Image Cropping', icon: 'fa fa-crop', link: '/file-utils/crop' },
                 ]},
                 { name: 'Fonts', icon: 'fa fa-font', link: '/fonts' }],
    extras: [{ name: 'Login', icon: 'fa fa-sign-in', link: '/login' },
            { name: 'Signup', icon: 'fa fa-user', link: '/signup' },
            { name: 'Lock Page', icon: 'fa fa-lock', link: '/lock' },
            { name: 'Invoice', icon: 'fa fa-tag', link: '/invoice' }],

    documentation: [{ name: 'Documentation', icon: 'fa fa-file-text-o', link: '/documentation' }]
}