export const leftMenuItemsMixin = {
    data() {
        return {
            menuList: [
                {
                    label: "Examples",
                    icon: "tv",
                    link: "",
                    linkType: "route",
                    type: "dropdown",
                    activeKey: ["examples"],
                    items: [
                        {
                            label: "Login",
                            icon: "",
                            link: "login-app",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["login"],
                        },
                        {
                            label: "Register",
                            icon: "",
                            link: "register-app",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["register"],
                        },{
                            label: "Forgot Password",
                            icon: "",
                            link: "forgot-password-app",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["forgot-password-app"],
                        },
                        {
                            label: "Lock",
                            icon: "",
                            link: "lock-app",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["lock-app"],
                        },
                        {
                            label: "Profile",
                            icon: "",
                            link: "profile.show",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["profile"],
                        },
                        /*{
                            label: "Pricing",
                            icon: "",
                            link: "pricing",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["pricing"],
                        },
                        {
                            label: "Project App",
                            icon: "",
                            link: "project-management-app",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["project-management-app"],
                        },
                        {
                            label: "Todo App",
                            icon: "",
                            link: "todo-app",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["todo-app"],
                        },
                        {
                            label: "Email App",
                            icon: "",
                            link: "email-app",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["email-app"],
                        },
                        {
                            label: "Chat App",
                            icon: "",
                            link: "chat-app",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["chat-app"],
                        }*/
                    ]
                },
                {
                    label: "Components",
                    icon: "plug",
                    link: "",
                    linkType: "route",
                    type: "dropdown",
                    activeKey: ["buttons"],
                    items: [
                        {
                            label: "Alerts",
                            icon: "",
                            link: "alert",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["alert"],
                        },
                        {
                            label: "Avatar",
                            icon: "",
                            link: "avatar",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["avatar"],
                        },
                        {
                            label: "Badge",
                            icon: "",
                            link: "badge",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["badge"],
                        },
                        {
                            label: "Breadcrumb",
                            icon: "",
                            link: "breadcrumb",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["breadcrumb"],
                        },
                        {
                            label: "Buttons",
                            icon: "",
                            link: "button",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["button"],
                        },
                       /* {
                            label: "Chart",
                            icon: "chart-bar",
                            link: "chart",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["chart"],
                        },*/
                        {
                            label: "Collapsible",
                            icon: "",
                            link: "collapsible",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["collapsible"],
                        },
                        {
                            label: "Dropdowns",
                            icon: "",
                            link: "dropdown",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["dropdown"],
                        },
                        {
                            label: "Lists",
                            icon: "",
                            link: "list",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["list"],
                        },
                        {
                            label: "Modals",
                            icon: "",
                            link: "modal",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["modal"],
                        },
                        {
                            label: "Pagination",
                            icon: "",
                            link: "pagination",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["pagination"],
                        },
                        {
                            label: "Popovers",
                            icon: "",
                            link: "popover",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["popover"],
                        },
                        {
                            label: "Progress",
                            icon: "",
                            link: "progress",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["progress"],
                        },
                        {
                            label: "Tabs",
                            icon: "",
                            link: "tab",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["tab"],
                        },
                        {
                            label: "Tables",
                            icon: "table",
                            link: "table",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["table"],
                        },/* TODO: Toaster Feature
                        {
                            label: "Toastr",
                            icon: "",
                            link: "toastr",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["toastr"],
                        },*/
                        {
                            label: "Tooltips",
                            icon: "",
                            link: "tooltip",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["tooltip"],
                        }
                    ]
                },
                {
                    label: "Layout Items",
                    icon: "window-maximize",
                    link: "",
                    linkType: "route",
                    type: "dropdown",
                    activeKey: ["content-boxes"],
                    items: [
                        {
                            label: "Layout Structure",
                            icon: "layer-group",
                            link: "layout-structure",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Grid",
                            icon: "grip-horizontal",
                            link: "layout-grid",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Content Boxes",
                            icon: "window-restore",
                            link: "layout-content-box",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Statistic Widgets",
                            icon: "chart-bar",
                            link: "layout-statistic-widget",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["statistic-widgets"],
                        },
                    ],
                },
                {
                    label: "Form Elements",
                    icon: "edit",
                    link: "",
                    linkType: "route",
                    type: "dropdown",
                    activeKey: ["forms"],
                    items: [
                        {
                            label: "Form Structure",
                            icon: "",
                            link: "form-structure",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["form-structure"],
                        },
                        {
                            label: "Input Group",
                            icon: "",
                            link: "form-input-group",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["input-group"],
                        },/*
                        {
                            label: "Simple Fields",
                            icon: "",
                            link: "form-simple-field",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["form-simple-input-fields"],
                        },*/
                        {
                            label: "Repeatable Fields",
                            icon: "retweet",
                            link: "form-repeatable-field",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["repeatable-input-field"],
                        },
                        {
                            label: "Inline Repeat. Fields",
                            icon: "retweet",
                            link: "form-inline-repeatable-field",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["inline-repeatable-input-field"],
                        },
                        {
                            label: "Date/Time Fields",
                            icon: "clock",
                            link: "form-date-field",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["date-input-field"],
                        },
                        {
                            label: "Select Input",
                            icon: "",
                            link: "form-select-input",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["select-input-field"],
                        },/* TODO: Tag Input Feature
                        {
                            label: "Tags Input",
                            icon: "tags",
                            link: "form-tag-input",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["tag-input-field"],
                        },*/
                        /* TODO: Validation Feature
                        {
                            label: "Validation",
                            icon: "",
                            link: "form-validation",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["form-validation"],
                        },*/
                    ]
                },
            ],
        }
    }
}
