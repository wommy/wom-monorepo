// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    force_consent: true,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        //document.getElementById('cc--main').remove();
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'This survey website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent, and are used to make sure the survey gets out to as many people as possible. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'This survey website uses cookies to enable its basic functionalities and to make sure the survey gets out to as many people as possible. We use cookies based on your consent. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please visit our <a href="https://uniglobalunion-surveys.org/privacy" class="cc-link">privacy center</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of this website. Without these cookies, the website cannot serve users a Typeform survey.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Visitor Analytics',
                        description: 'These cookies track general information about how users interact with our website.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: 'Google Analytics',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Google Analytics allows us to track general information about how our website is being used, including what pages are viewed, how long visitors spend on each page, and which countries visitors are from. This data is always anonymous.',
                            }
                        ]
                    }, {
                        title: 'Advertising Analytics',
                        description: 'These cookies associate user visits with traffic from advertising platforms. All of the data is anonymized and cannot be used to identify you.',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                        {
                            col1: 'Meta Pixel',
                            col2: 'facebook.com',
                            col3: '6 months',
                            col4: 'The Meta Pixel allows us to gather statistics about actions taken by users after they are redirected to our website by clicking on a Facebook or Instagram advertisement. These actions are reported in the aggregate and are not connected with individual users or accounts. We use this data to make sure the survey gets out to as many people as possible through ads on Meta platforms.',
                        },
                        {
                            col1: 'Twitter Pixel',
                            col2: 'twitter.com',
                            col3: '3 months',
                            col4: 'The Twitter Pixel allows us to gather statistics about actions taken by users after they are redirected to our website by clicking on a Facebook or Instagram advertisement. These actions are reported in the aggregate and are not connected with individual users or accounts. We use this data to make sure the survey gets out to as many people as possible through ads on Twitter.',
                        }
                        ]
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="mailto:privacy@jarrow-insights.co">contact us</a>.',
                    }
                ]
            }
        }
    },
    
    gui_options: {
        consent_modal: {
            layout: 'cloud',               // box/cloud/bar
            position: 'middle center',     // bottom/middle/top + left/right/center
            transition: 'zoom',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    }
});