# Documentation for this app

This project was bootstrapped with [Create React App with template TypeScript](https://github.com/facebook/create-react-app).

## To setup this project follow below steps:

1. Install node and npm (my versions of `node`=14.15.5 and `npm`=6.14.11)
2. Install Git (`optional`)
3. Goto project directory and do `npm i` this will install node packages
4. Type `npm start` it will run the project on `localhost:3000`
5. To test and generate code coverage type `npm test -- --coverage`

## Details of development approach followed:

1. Components are put together in the components folder

- `4` components are created
- `Customers.tsx` - Parent component for filtering between Admin and Manager
- `Spinner.tsx` - For showing spinner while fetching data from API
- `ListCustomers.tsx` - For showing List of customers in paginated format with current limit set to 50 per page
- `CustomerItem.tsx` - Component for each item of the list of customers

2. Other folders

- `enums` - Consist of enums for Customer role type
- `queries` - Contains Graphql queries
- `models` - Contains response model for Graphql API
- `utils` - Contains helpers functions
- `config` - Contains AWS config and Apollo client config files

3. Libraries used

- `apollo`
- `graphql-tag`
- `jest`
- `aws-appsync-auth-link`
- `react-paginate`

Please connect at abhishekkedar246[at]hotmail.com for any further details
