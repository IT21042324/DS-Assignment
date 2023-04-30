# DS-Assignment
This a 3rd year 1st semester project developed for the DS module

#Group members - 
Reezan S.A - IT21042324
Achchige R.A.N.R - IT21102264
Padmasiri P.G.S.M - IT21078996
Abeygunasekara P.W.A.B.N - IT21104176

#How to run the project

//To run the project locally,
1. open 5 terminals in vs code

2. in the first 4 terminals navigate to DS-Assingment/Project/backend
->in 1st terminal navigate to userService and type npm run dev
->in 2nd terminal navigate to storeService and type npm run dev
->in 3rd terminal navigate to productService and type npm run dev
->in 4th terminal navigate to paymentService and type npm run dev

3. in the fifth terminal navigate to DS-Assingment/Project/frontend,
-> type npm start

//to run the project using docker desktop
1. open a terminal in vs code and navigate to DS-Assigment/Project folder.
2. open docker-desktop
3. kubectl apply -f rbns.yaml
4. Wait for some time till the entire system starts running and then go to the browser, and type http:localhost://3000
