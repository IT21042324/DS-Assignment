# DS-Assignment
This a 3rd year 1st semester project developed for the DS module

## Group Members 
1. Reezan S.A - IT21042324
2. Achchige R.A.N.R - IT21102264
3. Padmasiri P.G.S.M - IT21078996
4. Abeygunasekara P.W.A.B.N - IT21104176

## How to run the project

### To run the project locally,
1. Open 5 terminals in vs code

2. In the first 4 terminals navigate to DS-Assingment/Project/backend
- In 1st terminal navigate to userService and type `npm run dev`
- In 2nd terminal navigate to storeService and type `npm run dev`
- In 3rd terminal navigate to productService and type `npm run dev`
- In 4th terminal navigate to paymentService and type `npm run dev`

3. In the fifth terminal navigate to DS-Assingment/Project/frontend,
- Type npm start

### To run the project using docker desktop,
1. Open a terminal in vs code and navigate to DS-Assigment/Project folder.
2. Open docker-desktop
3. Run `kubectl apply -f rbns.yaml` in the terminal
4. Wait for some time till the entire system starts running and then go to the browser, and type `http:localhost://3000`
