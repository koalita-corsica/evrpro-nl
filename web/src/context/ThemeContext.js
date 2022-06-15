import React from "react"

const defaultState = {
  logged: false,
  toggleLogged: () => {},
}

const ThemeContext = React.createContext(defaultState)


class ThemeProvider extends React.Component {
  state = {
    logged: false,
  }

  toggleLogged = () => {
    let logged = !this.state.logged
    localStorage.setItem("logged", JSON.stringify(logged))
    this.setState({ logged })
  }

  componentDidMount() {
    // Getting logged value from localStorage!
    const lsLogged = JSON.parse(localStorage.getItem("logged"))
    if (lsLogged) {
      this.setState({ logged: lsLogged })
    } else {
      this.setState({ logged: true })
    }
  }

  render() {
    const { children } = this.props
    const { logged } = this.state
    return (
      <ThemeContext.Provider
        value={{
          logged,
          toggleLogged: this.toggleLogged,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }