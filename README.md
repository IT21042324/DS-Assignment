# Distributed Systems Assignment

This repository contains the source code for a project developed as part of the Distributed Systems module during the 1st semester of our 3rd year.

## Contributors
- Reezan S.A (IT21042324)
- Achchige R.A.N.R (IT21102264)
- Padmasiri P.G.S.M (IT21078996)
- Abeygunasekara P.W.A.B.N (IT21104176)

## Getting Started

This project can be run either locally or using the provided Kubernetes file (rbns.yaml).

### Prerequisites
Before running the project, ensure that you have Node.js and npm installed on your system. You can check if you have these installed by running `node -v` and `npm -v` in a terminal. If you do not have these installed, you can download them from [here](https://nodejs.org/en/download/).

### Running Locally
1. Open 5 terminals in VS Code.
2. In the first 4 terminals, navigate to the `backend` directory within the `Project` directory.
    - In each terminal, navigate to one of the service directories (`userService`, `storeService`, `productService`, or `paymentService`) and run `npm install` to install the necessary dependencies.
    - Once the dependencies have been installed, run `npm run dev` to start the service.
3. In the fifth terminal, navigate to the `frontend` directory within the `Project` directory.
    - Run `npm install` to install the necessary dependencies.
    - Once the dependencies have been installed, run `npm start`.

### Running with Kubernetes
1. Open a terminal in VS Code and navigate to the `Project` directory.
2. Ensure that Docker Desktop is running.
3. Run `kubectl apply -f rbns.yaml`.
4. Wait for some time until all components have started, then open your browser and navigate to `http://localhost:3000`.
