(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8178:(e,a,i)=>{Promise.resolve().then(i.bind(i,9867))},9867:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>d});var t=i(5155),s=i(470),r=i(6874),n=i.n(r),l=i(2115);let o={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}},c={animate:{transition:{staggerChildren:.1}}};function d(){let{formData:e,isLoading:a,error:i,success:r,handleChange:d,handleSubmit:m}=function(){let[e,a]=(0,l.useState)({name:"",email:"",message:""}),[i,t]=(0,l.useState)(!1),[s,r]=(0,l.useState)(null),[n,o]=(0,l.useState)(!1),c=async i=>{i.preventDefault(),t(!0),r(null),o(!1);try{if(!(await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw Error("Failed to send message");o(!0),a({name:"",email:"",message:""})}catch(e){r(e instanceof Error?e.message:"An error occurred")}finally{t(!1)}};return{formData:e,isLoading:i,error:s,success:n,handleChange:e=>{let{name:i,value:t}=e.target;a(e=>({...e,[i]:t}))},handleSubmit:c}}();return(0,t.jsxs)("div",{className:"min-h-screen",children:[(0,t.jsx)("section",{id:"hero",className:"min-h-screen flex items-center justify-center pt-16",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)(s.P.div,{className:"text-center",variants:c,initial:"initial",animate:"animate",children:[(0,t.jsx)(s.P.h1,{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6",variants:o,children:"Ashwin Senthil Arumugam"}),(0,t.jsx)(s.P.p,{className:"text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8",variants:o,transition:{delay:.2},children:"I'm a passionate software developer with expertise in building scalable applications and conducting cutting-edge research in AI and distributed systems."}),(0,t.jsxs)(s.P.div,{className:"flex justify-center space-x-4",variants:o,transition:{delay:.4},children:[(0,t.jsx)(s.P.a,{href:"https://linkedin.com/in/your-profile",target:"_blank",rel:"noopener noreferrer",className:"primary-button",whileHover:{scale:1.05},whileTap:{scale:.95},children:"LinkedIn"}),(0,t.jsx)(s.P.a,{href:"https://github.com/ashwin63",target:"_blank",rel:"noopener noreferrer",className:"secondary-button",whileHover:{scale:1.05},whileTap:{scale:.95},children:"GitHub"})]})]})})}),(0,t.jsx)("section",{id:"about",className:"py-20 bg-white dark:bg-gray-900",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsx)(s.P.h2,{className:"heading",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:"About Me"}),(0,t.jsxs)(s.P.div,{className:"grid grid-cols-1 md:grid-cols-2 gap-8",variants:c,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[(0,t.jsxs)(s.P.div,{variants:o,children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-4",children:"Background"}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"I am a passionate software developer with expertise in enterprise applications and AI research. Currently pursuing my Master's in Computer Science at Penn State University, I combine academic knowledge with practical industry experience to create innovative solutions."})]}),(0,t.jsxs)(s.P.div,{variants:o,children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-4",children:"Education"}),(0,t.jsxs)("ul",{className:"space-y-4",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("h4",{className:"font-medium",children:"Master of Science in Computer Science and Engineering"}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"Penn State University (Expected April 2025)"})]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("h4",{className:"font-medium",children:"Bachelor of Technology in Information Technology"}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"College of Engineering Guindy, Anna University, Chennai"})]})]})]})]})]})}),(0,t.jsx)("section",{id:"skills",className:"py-20 bg-gray-50 dark:bg-gray-800",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsx)(s.P.h2,{className:"heading",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:"Skills"}),(0,t.jsx)(s.P.div,{className:"grid grid-cols-1 md:grid-cols-3 gap-8",variants:c,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[{title:"Languages & Frameworks",items:["Java","JUnit","REST API","OData API","SQL","ReactJS","AngularJS","NodeJS","Python"]},{title:"Tools & Technologies",items:["AWS","Docker","TensorFlow","PyTorch","BOPF","Android","UI5","Fiori"]},{title:"Developer Tools",items:["Git","CI/CD","TDD","Agile","Postman","SaaS","Linux","Deep Learning"]}].map((e,a)=>(0,t.jsxs)(s.P.div,{className:"card",variants:o,whileHover:{scale:1.02},transition:{duration:.2},children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-4",children:e.title}),(0,t.jsx)("ul",{className:"space-y-2",children:e.items.map(e=>(0,t.jsx)(s.P.li,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.3,delay:.1*a},children:e},e))})]},e.title))})]})}),(0,t.jsx)("section",{id:"experience",className:"py-20 bg-white dark:bg-gray-900",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsx)(s.P.h2,{className:"heading",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:"Experience"}),(0,t.jsx)(s.P.div,{className:"space-y-8",variants:c,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[{title:"Software Development Engineer",company:"Amazon",period:"2023 - Present",description:"Working on distributed systems and cloud infrastructure.",achievements:["Led development of microservices architecture","Improved system reliability by 40%","Implemented automated testing pipeline"]},{title:"SAP - Associate Developer",period:"Jul 2020 - Jul 2023",achievements:["Developed and optimized front-end and back-end modules for SAP Public Cloud","Led API development (REST & OData) to automate transportation cost transfers","Revamped system architecture, improving SAP TM's quotation speed by 90%","Built an enterprise ML model with 80% accuracy for automated data extraction"]},{title:"Samsung - Deep Learning Intern",period:"May 2019 - Jul 2019",achievements:["Researched page ranking algorithms and trained an efficient neural network-based model"]}].map((e,a)=>(0,t.jsxs)(s.P.div,{className:"card",variants:o,whileHover:{scale:1.02},transition:{duration:.2},children:[(0,t.jsx)("h3",{className:"text-xl font-semibold",children:e.title}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:e.period}),(0,t.jsx)("ul",{className:"mt-4 space-y-2",children:e.achievements.map((e,a)=>(0,t.jsxs)(s.P.li,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.3,delay:.1*a},children:["• ",e]},a))})]},e.title))})]})}),(0,t.jsx)("section",{id:"projects",className:"py-20 bg-gray-50 dark:bg-gray-800",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsx)(s.P.h2,{className:"heading",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:"Projects & Research"}),(0,t.jsx)(s.P.div,{className:"grid grid-cols-1 md:grid-cols-2 gap-8",variants:c,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[{title:"5G Network Fuzzing",tech:"GoLang, Python, 5G Network",description:"Developed feedback-driven testing for 5G microservices, improving code coverage.",github:"https://github.com/ashwin63/restler-fuzzer"},{title:"KV Paxos",tech:"GoLang, Multithreading",description:"Built a fault-tolerant distributed key-value store using the Paxos protocol.",github:"https://github.com/ashwin63/Paxos_protocol"},{title:"CEG Prints",tech:"Android, Java, Python Flask, Firebase",description:"Created a mobile app for wireless printing, with 4,000+ downloads on Play Store.",github:"https://github.com/ashwin63/CEG-Prints"},{title:"AI Image Classification",tech:"Vision Transformer, PyTorch",description:"Led a team to build a Vision Transformer model achieving 80% accuracy in detecting AI-generated images.",github:"https://github.com/ashwin63/AI_Human_Image_Classification"}].map((e,a)=>(0,t.jsx)(s.P.div,{className:"card group cursor-pointer",variants:o,whileHover:{scale:1.02},transition:{duration:.2},children:(0,t.jsxs)(n(),{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"block",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start mb-2",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors",children:e.title}),(0,t.jsx)("svg",{className:"w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors",fill:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})]}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:e.tech}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:e.description})]})},e.title))})]})}),(0,t.jsx)("section",{id:"contact",className:"py-20 bg-white dark:bg-gray-900",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsx)(s.P.h2,{className:"heading",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:"Contact"}),(0,t.jsxs)(s.P.div,{className:"max-w-2xl mx-auto",variants:o,initial:"initial",whileInView:"animate",viewport:{once:!0},children:[(0,t.jsxs)("form",{onSubmit:m,className:"space-y-6",children:[(0,t.jsxs)(s.P.div,{variants:o,children:[(0,t.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Name"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:d,required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"})]}),(0,t.jsxs)(s.P.div,{variants:o,children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:d,required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"})]}),(0,t.jsxs)(s.P.div,{variants:o,children:[(0,t.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Message"}),(0,t.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:d,required:!0,rows:4,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"})]}),i&&(0,t.jsx)(s.P.div,{className:"text-red-600 dark:text-red-400 text-sm",initial:{opacity:0},animate:{opacity:1},children:i}),r&&(0,t.jsx)(s.P.div,{className:"text-green-600 dark:text-green-400 text-sm",initial:{opacity:0},animate:{opacity:1},children:"Message sent successfully!"}),(0,t.jsx)(s.P.button,{type:"submit",disabled:a,className:"btn-primary w-full",whileHover:{scale:1.02},whileTap:{scale:.98},variants:o,children:a?"Sending...":"Send Message"})]}),(0,t.jsxs)(s.P.div,{className:"mt-8 text-center space-y-2",variants:o,children:[(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"Email: ashwinsenthil63@gmail.com"}),(0,t.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"Phone: +1 582-203-8086"})]})]})]})})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[363,441,684,358],()=>a(8178)),_N_E=e.O()}]);