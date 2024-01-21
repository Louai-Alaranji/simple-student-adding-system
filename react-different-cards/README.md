# React + Vite

// props = read-only properties that are shared between components.
// a parent component can send data to a child component
// <component key=value/>

// propsTypes = a mechanism that ensures that the passed value
// is of the correct datatype
// age: propTypes.number (checks if the passed value is a number)

// defaultProps = default values for the props in case they are not passed from the parent component.
// name = "Guest"

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
