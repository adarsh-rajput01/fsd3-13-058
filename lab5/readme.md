# Project Setup
1. create two folder frontend and backend
2. go to frontend `cd frontent`
    - type `npm create vite@latest`
    -press `Y` if asked to install
    - enter `.` in project name
    - select `React `as framework arrow key
    - select javaScript from variant by arrow key 
    - select Eslint by arrow key 
    - select Yes and press enter 
3. setup tailwind in react project
- inatall tailwind by `npm install tailwindcss @tailwindcss/vite`
 - update vite.config.js as below image
    ![alt text](image-1.png)
    - add `import "tailwindcss"` top of index.css
    - style can be add into html by className beacuse class is a predefined keyword in react
- when js functions returns  directly html contents , called component
- it must return html
- most be closed at the calling time
- it can be used anywhere and anytime