import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Profile from './Profile';
import Information from './Information';
import About from './About';
import Service from './Service';
import Our_Services from './Our_Services';
import Team from './Team';
import Pricing from './Pricing';
import Blog from './Blog';
import Contact from './Contact';

  // Project-8 :- Navigator

function App() {

  // (1). Pass Data--Array of Element (App.js to Home.js) 

    const home= ["React has a Community of Millions of Developers.",
                 "UI / UX Designer & Web Developer",
                 "React was created by Jordan Walke, a software engineer at Meta, who released an early prototype of React called `FaxJS`. He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. It was open-sourced at JSConf US in May 2013.",
                 "React is a JavaScript-based UI development library. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
                 "View Detail",
                 "Download CV"
                ];


  // (2). Pass Data--Array of Element (App.js to Profile.js) 

    const profile= ["Jordan Walke",
                    "React js developer",
                    "React was inspired by many technologies including UI frameworks, ML family of languages (including SML/ OCaml) which helped me articulate the value of immutability."
                   ];


  // (3). Pass Data--Single Object (Profile.js to Information.js)


  // (4). Pass Data--Array of Object (App.js to About.js)

    const about= [
        {
            icon : <i class="fa fa-desktop"></i>,
            title : "Unique design",
            description : "Unique design simply means an improved version of an already better product or design. Uniqueness means the quality of being improved."
        },
        {
            icon : <i class="fa fa-user"></i>,
            title : "Different Layout",
            description : "A website layout is the arrangement of all visual elements on a webpage.we can control relationship between guide the user experience."
        },
        {
            icon : <i class="fa fa-comment"></i>,
            title : "Make it Simple",
            description : "A Web page is a document for the World Wide Web that is identified by a unique uniform resource locator (URL)."
        },
        {
            icon : <i class="fa fa-image"></i>,
            title : "Responsiveness",
            description : "A web development approach that creates dynamic changes to of a website, depending on the screen size the device being used to view it."
        },
        {
            icon : <i class="fa fa-th"></i>,
            title : "Testing for Perfection",
            description : "Perfecto is a cloud-based mobile app testing tool that is designed to help test applications on different operating systems and devices."
        },
        {
            icon : <i class="fa fa-cog"></i>,
            title : "Advanced Options",
            description : "The Advanced Options screen lets you start Windows in advanced troubleshooting modes. You can access the menu on your computer."
        }
    ];  


  // (5). Pass Data--Array of Object (App.js to Service.js)

    const service= [
        {
            icon : <i class="fas fa-code"></i>,
            name : "Clean Code",
            paragraph : "Clean code is clear, understandable, and maintainable.",
        },
        {
            icon : <i class="fas fa-cogs"></i>,
            name : "Problem Solving",
            paragraph : "the act of defining a problem, determining the cause of the problem.",
        },
        {
            icon : <i class="fas fa-globe"></i>,
            name : "Best Domain",
            paragraph : "World's largest Domain GoDaddy, Go with the world's largest Domain.",
        },
        {
            icon : <i class="fas fa-user-shield"></i>,
            name : "Secure Website",
            paragraph : "A web application firewall activated to prevent attacks and hacks.",
        }
    ];
    
    


    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index path='/' element={<Home Home={home} />} />
                        <Route path='/Profile' element={<Profile Profile={profile} />} />
                        <Route path='/Information' element={<Information />} />
                        <Route path='/About' element={<About About={about} />} />
                        <Route path='/Service' element={<Service Service={service} />} />
                        <Route path='/Our_Services' element={<Our_Services />} />
                        <Route path='/Team' element={<Team />} />
                        <Route path='/Pricing' element={<Pricing />} />
                        <Route path='/Blog' element={<Blog />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
