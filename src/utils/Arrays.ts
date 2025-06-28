import { Content, Prices, Workers, Service } from "./magicValues";

export const List : Array<any> = [{
    title: "Contenido",
    href: Content,
    description:
        "Es el contenido principal de nuestra pagina.",
},
{
    title: "Planes",
    href: Prices,
    description:
        "Son los precios que maneja nuestra pagina.",
},
{
    title: "Elenco de Trabajadores",
    href: Workers,
    description:
        "Son los trabajadores que maneja nuestra pagina.",
},
{
    title: "Servicios",
    href: Service,
    description:
        "Son los servicios que puedes usar en nuestra pagina.",
},
];

export const reviews : Array<any> = [
    {
        id: 0,
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
        date: "20 min",
        likes: 10,
        retweets: 10,
        replies: 10,
    },
    {
        id: 1,
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
        date: "43 min",
        likes: 10,
        retweets: 10,
        replies: 10,
    },
    {
        id: 2,
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
        date: "30 min",
        likes: 10,
        retweets: 10,
        replies: 10,
    },
    {
        id: 3,
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
        date: "2 min",
        likes: 10,
        retweets: 10,
        replies: 10,
    },
    {
        id: 4,
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
        date: "10 min",
        likes: 10,
        retweets: 10,
        replies: 10,
    },
    {
        id: 5,
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
        date: "50 min",
        likes: 10,
        retweets: 10,
        replies: 10,
    },
];

export const workers : Array<any> = [
    {
        id: 1,
        name: "Alejandro Osorio",
        img: "https://scontent.feoh4-3.fna.fbcdn.net/v/t39.30808-6/469794242_10228033056433372_3774422237624396587_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHE1JM7WOTgLfbyOthu5_2Cj9cuVYnalZeP1y5VidqVl9AF2lRQlkvhxleP5SWyBDyDA2lmuJoalzNZZk5fNc07&_nc_ohc=ca29a6tUzVUQ7kNvwGmXCDr&_nc_oc=AdnZyzsgWgJ6qX-2dr4SL7uEqEwYyYN36ZQj2KTyaSBGarmBUGgwGOX1gXYT9JSu1Hk&_nc_zt=23&_nc_ht=scontent.feoh4-3.fna&_nc_gid=RXoT-xD_JdtTHeCkHBBzag&oh=00_AfMPa3qpVDkkeBt2pLj8aOTE5Jr4D9SJqJ6wWSM8VR35Cw&oe=68629AC0",
        vanderImg: "https://avatar.vercel.sh/jill",
        position: ["Profesor de Inglés", "Fundador"],
        age: 60,
        experience: 16,
        PaginaDescripcion: `/workers/1`,
        Horarios: "9:00 Am - 5:00 Pm",
        Dias:["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        description: "Alejandro Osorio es un profesor de inglés con más de 16 años de experiencia en la enseñanza del idioma. Fundador de English Corner Academy, ha dedicado su carrera a ayudar a estudiantes de todas las edades a alcanzar sus metas lingüísticas. Su enfoque personalizado y su pasión por la enseñanza lo convierten en un educador excepcional.",
        Email: "alejandro.osorio@example.com",
        Telefono: "+57 300 1234567",
        RedesSociales: {
            Linkedin: "https://www.linkedin.com/in/alejandro-osorio-velasquez-221ba895/"
        },
    },
    
    // {
    //     id: 1,
    //     name: "Jill",
    //     img: "https://avatar.vercel.sh/jill",
    //     position: ["Profesor de Matemáticas", "Profesor de Física"],
    //     PaginaDescripcion: "https://www.linkedin.com/in/jack/",
    //     Horarios: "Lunes a Viernes de 9:00 a 18:00",
    //     Dias:["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    // },
    // {
    //     id: 3,
    //     name: "Jill",
    //     img: "https://avatar.vercel.sh/jill",
    //     position: ["Profesor de Matemáticas", "Profesor de Física"],
    //     PaginaDescripcion: "https://www.linkedin.com/in/jack/",
    //     Horarios: "Lunes a Viernes de 9:00 a 18:00",
    //     Dias:["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    // },
    // {
    //     id: 4,
    //     name: "Jill",
    //     img: "https://avatar.vercel.sh/jill",
    //     position: ["Profesor de Matemáticas", "Profesor de Física"],
    //     PaginaDescripcion: "https://www.linkedin.com/in/jack/",
    //     Horarios: "Lunes a Viernes de 9:00 a 18:00",
    //     Dias:["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    // },
];