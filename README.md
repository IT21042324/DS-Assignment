# DS-Assignment
This is a project developed for the DS module during the 1st semester of our 3rd year.

## Group Members 
1. Reezan S.A - IT21042324
2. Achchige R.A.N.R - IT21102264
3. Padmasiri P.G.S.M - IT21078996
4. Abeygunasekara P.W.A.B.N - IT21104176

## How to run the project

You can run the project either locally or using Docker Desktop.

### Running the project locally
1. Open 5 terminals in VS Code.
2. In the first 4 terminals, navigate to `DS-Assingment/Project/backend`.
    - In the 1st terminal, navigate to `userService` and type `npm run dev`.
    - In the 2nd terminal, navigate to `storeService` and type `npm run dev`.
    - In the 3rd terminal, navigate to `productService` and type `npm run dev`.
    - In the 4th terminal, navigate to `paymentService` and type `npm run dev`.
3. In the fifth terminal, navigate to `DS-Assingment/Project/frontend` and type `npm start`.

### Running the project using Docker Desktop
1. Open a terminal in VS Code and navigate to the `DS-Assigment/Project` folder.
2. Open Docker Desktop.
3. Run `kubectl apply -f rbns.yaml` in the terminal.
4. Wait for some time until the entire system starts running, then go to your browser and type `http://localhost:3000`.
