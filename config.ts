const siteMetadata = {
    title: `Diego Braga`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/fox1.png`,
    icon: `/images/fox1.png`,
    titleImage: `/images/die.png`,
    ogImage: `/images/die.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Full Stack Software Engineer`,
    description: `Computer guy who loves learning new stuff and building things for the web 😎 click in "see works" down bellow or "portfolio" in the navbar to browse my personal projects.`,
    about:
        "",
    author: `@dieberaga`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "GitHub",
            url: "https://github.com/diebraga/diebraga-portfolio",
        },
    ],
    social: [
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/diebraga",
        },
        {
            name: "Linkedin",
            icon: "/images/in.png",
            url: "https://www.linkedin.com/in/diebraga",
        },
        {
            name: "Github",
            icon: "/images/git1.png",
            url: "https://github.com/diebraga",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: false,
        description: `Did you like my work? Awesome drop me an email or check my social media ☺.`,
        mail: "diebraga.developer@gmail.com",
        phone: "+353 833414052",
        address: "Limerick, Ireland",
    },
    disqus: "",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
